import '../style/miscMapUI.css'
import { booleanContains, booleanPointInPolygon, polygon } from '@turf/turf';
import { GeoJsonObject } from 'geojson';
import L, { CRS, geoJson, Icon, LatLng, tileLayer } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
  GeoJSON
} from 'react-leaflet';
import truegeojsondata,{ConvertedFeature} from '../data/GeoJSON';
const geojsondata = JSON.parse(JSON.stringify(truegeojsondata)) as {features: ConvertedFeature[], type: String};

import { Guess } from '../hooks/useGameLogic';
import { Point } from '../types/geometry';
import { GameState, GameStatus } from '../types/jingle';
import {
  calculateDistance,
  closePolygon,
  featureMatchesSong,
  getCenterOfPolygon,
  GetClosestMapIdPolys,
  getDistanceToPolygon,
  GetTotalDistanceToPoly,
  toOurPixelCoordinates,
} from '../utils/map-utils';
import { basemaps} from '../data/basemaps';
import { groupedLinks } from '../data/GroupedLinks';
import LinkClickboxes from './LinkClickboxes';
import { GeoJSONOptions } from 'leaflet';



interface RunescapeMapProps {
  gameState: GameState;
  onGuess: (guess: Guess) => void;
  className?: string;
  confirmedGuess: boolean; 
  setShowConfirmGuess: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMapId?: React.Dispatch<React.SetStateAction<number>> | null;
  currentMapId?: number | null;
}


interface RunescapeMapPropsInner { //lazy solution for now for
  gameState: GameState;
  onGuess: (guess: Guess) => void;
  className?: string;
  confirmedGuess: boolean; 
  setShowConfirmGuess: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMapId: React.Dispatch<React.SetStateAction<number>>;
  setMapCenter: React.Dispatch<React.SetStateAction<number[]>>;
  currentMapId: number;
  zoom: number;
  setZoom:  React.Dispatch<React.SetStateAction<number>>;
  currentMusicData: number[];
}
;

export default function RunescapeMapWrapper({
  className,
  ...props
}: RunescapeMapProps) {

  const [currentMapId, setCurrentMapId] = useState(-1);
  const currentMap = currentMapId < 0 ? basemaps[0] : basemaps[currentMapId];
  const [zoom, setZoom] = useState(1); 
  const [mapCenter, setMapCenter] = useState([3222, 3218 ]); //lumby
  const mapRef = useRef<L.Map>(null);
  const mapIdPadding = currentMapId == 0 ? -64 : 256; //in game tiles. 64 tiles per square.
  const [currentMusicData, setCurrentMusicData] = useState([0, 0]);
  const currentSong = geojsondata.features[currentMusicData[0]].properties?.title.match(/>(.*?)</)[1];

  const currentFeature = geojsondata.features[currentMusicData[0]];

  const NextSong = () => {
    setCurrentMusicData((prev) => prev[0] < geojsondata.features.length - 1 ? [prev[0]+1, 0] : prev);
 }
 
 const PrevSong = () => {
   setCurrentMusicData((prev) => (prev[0] > 0 ? [prev[0] - 1, 0] : prev));
 }

 const NextPoly = () => {
  setCurrentMusicData((prev) => prev[1] < geojsondata.features[prev[0]].geometry.coordinates.length - 1 ? [prev[0],prev[1]+1]: prev)
 }

 const PrevPoly = () => {
  setCurrentMusicData((prev) => prev[1] > 0 ? [prev[0],prev[1]-1]: prev)
 }


    //keyboard events
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'r') {
          NextPoly();
        }
        else if(event.key === 'e'){
          PrevPoly();
        }
        else if(event.key === 'q'){
          PrevSong();
        }
        else if(event.key === 'w'){
          NextSong();
        }
      };
    
      window.addEventListener('keydown', handleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handleKeyDown); // clean up
      };
    }, []);


  return (
    <MapContainer
      crs={CRS.Simple}
      key={currentMapId} //lazy, maybe its doable through functions instead
      ref={mapRef}
      center={[mapCenter[1], mapCenter[0]]}
      zoom={zoom}
      maxZoom={1}
      minZoom={1}
      style={{ height: "100vh", width: "50%", background: "black", position:'fixed', left:'0px' }}
    //   maxBounds={[
    //     [currentMap.bounds[0][1] - mapIdPadding, currentMap.bounds[0][0] - mapIdPadding],
    //     [currentMap.bounds[1][1] + mapIdPadding, currentMap.bounds[1][0] + mapIdPadding],
    //   ]}
      maxBoundsViscosity={0.5}
      className={className}
    >
      <div style={{zIndex:'9999', backgroundColor:"white", width:"10rem", position:"fixed", top:"0px", left:"0px"}}>Current Song: {currentSong}</div>
      <div style={{zIndex:'9999', backgroundColor:"white", width:"20rem", fontSize:"2 rem", position:"fixed", top:"5rem", left:"0px"}}>Poly:{currentMusicData[1]} / {currentFeature.geometry.coordinates.length -1} MapId:{currentMapId}</div>
      {/* Map Selector */}
      <select
        onChange={(e) => {
          const newMapId = Number.parseInt(e.target.value);
          setCurrentMapId!(newMapId);
          setMapCenter([basemaps[newMapId].center[1], basemaps[newMapId].center[0]]);
        }}
        value={currentMapId!}
        className="map-select"
        style={{position:'fixed', left:'50rem'}}
      >
        {basemaps.map((map) => (
          <option key={map.mapId} value={map.mapId}>
            {map.name}
          </option>
        ))}
      </select>

      <RunescapeMap {...props} currentMapId={currentMapId} setCurrentMapId={setCurrentMapId} 
      setMapCenter={setMapCenter} zoom={zoom} setZoom={setZoom} currentMusicData={currentMusicData}/>

    </MapContainer>
  );
}

function RunescapeMap({ gameState, onGuess, confirmedGuess, setShowConfirmGuess, currentMapId, setCurrentMapId, 
  setMapCenter, zoom, setZoom, currentMusicData}: RunescapeMapPropsInner) {
    
  const currentSong = gameState.songs[gameState.round];
  const currentMap = basemaps[basemaps.length-1] 
  const [markerPosition, setMarkerPosition] = useState<L.LatLng | null>(null);

  const map = useMap(); // Get Leaflet map instance

  const currentPolys = geojsondata.features[currentMusicData[0]].geometry.coordinates;

  useEffect(()=>{
  
    if(!map){return;}
  
    class CustomTileLayer extends L.TileLayer {
      getTileUrl(coords: L.Coords): string {
        const { x, y, z } = coords;
        
        //leaflet's tms param DOESN'T GODDAMN WORK.
        const tmsY = -y - 1;

        return `/rsmap-tiles/mapIdTiles/${currentMapId}/${z}/0_${x}_${tmsY}.png`;
      }
    }
  
    const tileLayer = new CustomTileLayer("", {
      minZoom: -3,
      maxZoom: 3,
      tileSize: 256,
      tms: true
    });

    tileLayer.addTo(map);

    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map])


  //override map zoom, to not reset when changing mapIds
  useEffect(()=>{

    const updateZoom = () => setZoom(map.getZoom());
    map.on("zoomend", updateZoom);

    return () => {
      if (map) {
        map.off("zoomend", updateZoom);
      }
    };
  },[zoom])
  

  useMapEvents({
    click: async (e) => { //handle marker position on map clicks
      if (gameState.status !== GameStatus.Guessing) return;
      //if(markerPosition === null){setShowConfirmGuess(true);}
      //setMarkerPosition(e.latlng);
      //console.log(e.latlng);
    },
  });

  useEffect(()=>{
    if(currentMapId < -1){return;}
    OnConfirmGuess(setMapCenter, map, markerPosition, setMarkerPosition, currentSong, onGuess, currentMapId, setCurrentMapId, currentMusicData);
  },[confirmedGuess, currentMusicData]) 


  return (
    <>  

      {/* <LinkClickboxes mapIdLinks={groupedLinks[currentMap.name]} */}
      {/* setCurrentMapId={setCurrentMapId} setMapCenter={setMapCenter}/> */}

      {(
        <>
          {
            currentPolys
              .map((polygon, index) => {
                const poly = {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [polygon],
                  },
                } as GeoJsonObject;
                
                return <GeoJSON
                  key={currentMusicData[0]*10000 - index}
                  data={poly}
                  style={{
                    color: '#0d6efd', // Outline color
                    fillColor: '#0d6efd', // Fill color
                    weight: 5, // Outline thickness
                    fillOpacity: 0.5, // Opacity of fill
                  
                  }}
                />
              })

          }
        </>
      )}
    </>
  );
}

function OnConfirmGuess(setMapCenter: React.Dispatch<React.SetStateAction<number[]>> ,map: L.Map, markerPosition: L.LatLng | null, setMarkerPosition: React.Dispatch<React.SetStateAction<L.LatLng | null>>,
  currentSong: string, onGuess: (guess: Guess) => void, currentMapId: number, setCurrentMapId: React.Dispatch<React.SetStateAction<number>>,
currentMusicData: number[]) {

  const currentFeature = geojsondata.features[currentMusicData[0]];
  const currentPolys = currentFeature.geometry.coordinates;

  //const ourPixelCoordsClickedPoint = [markerPosition.lng, markerPosition.lat] as Point
  //console.log(ourPixelCoordsClickedPoint);

  const correctFeature = geojsondata.features[0]

  //all polys for for current song in the mapId closest to marker pos - needed to identify with donut polys.
  //const repairedPolygons = correctFeature.geometry.coordinates.map(closePolygon);
  //const [musicPolys, songMapId] = GetClosestMapIdPolys(correctFeature, markerPosition,currentMapId);
  //const repairedPolygons = musicPolys.map((musicPoly)=>closePolygon(musicPoly));

  // Create a GeoJSON feature for the nearest correct polygon
  // const correctPolygon = repairedPolygons.sort(
  //   (polygon1, polygon2) => {
  //     const d1 = getDistanceToPolygon(ourPixelCoordsClickedPoint, polygon1 as Point[]);
  //     const d2 = getDistanceToPolygon(ourPixelCoordsClickedPoint, polygon2 as Point[]);
  //     return d1 - d2;
  //   }
  // )[0];

  //if closest correct polgy is a gap, set outerPolygon to the actual parent poly, else iteself.
  // const repairedCorrectPolygon = correctPolygon; 
  // const outerPolygon = repairedPolygons.find((repairedPolygon) => {
  //   if (JSON.stringify(repairedPolygon) !==
  //     JSON.stringify(repairedCorrectPolygon)) {
  //     return booleanContains(
  //       polygon([repairedPolygon]),
  //       polygon([repairedCorrectPolygon])
  //     );
  //   }
  //   return false;
  // }) || repairedCorrectPolygon;

  //find all gaps in this outer polygon
  // const gaps = repairedPolygons.filter(
  //   (repairedPolygon) => JSON.stringify(repairedPolygon) !== JSON.stringify(outerPolygon) &&
  //     booleanContains(polygon([outerPolygon]), polygon([repairedPolygon]))
  // );

  //const correctPolygons = [outerPolygon, ...gaps];

  //check user click is right or wrong:
  //for checking aginst click, convert everything to our coords
  //const ourOuterPolygon = outerPolygon.map(toOurPixelCoordinates);
  //const ourGaps = gaps?.map((gap) => gap.map(toOurPixelCoordinates)) ?? [];
  //check if in outer poly
  // const inOuterPoly = booleanPointInPolygon(
  //   ourPixelCoordsClickedPoint,
  //   polygon([ourOuterPolygon])
  // );
  // Check if the clicked point is inside any hole
  //const isInsideGap = ourGaps.some((gap) => booleanPointInPolygon(ourPixelCoordsClickedPoint, polygon([gap]))
  //);
  //merge the two
  //const correctClickedFeature = inOuterPoly && !isInsideGap;

  //coords for <GeoJSON>
  // const convertedCoordinates = correctPolygons.map(
  //   (polygon) => polygon //their pixel coords
  //     .map(toOurPixelCoordinates) // 2.our pixel coords
  //     .map((coordinate) => (coordinate) // 3. leaflet { latlng }
  // )
  // );

  // const correctPolygonData = {
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Polygon',
  //     coordinates: convertedCoordinates,
  //   },
  // } as GeoJsonObject;

  // if (correctClickedFeature) {
  //   onGuess({
  //     correct: true,
  //     distance: 0,
  //     guessedPosition: markerPosition,
  //     correctPolygon: correctPolygonData,
  //   });
  // } else {
  //   //restored border distance calcs. TODO: SAVE MAP ID WHERE MARKER IS PLACED
  //   const closestDistance = GetTotalDistanceToPoly([markerPosition.lng, markerPosition.lat], currentMapId, correctPolygon as Point[], songMapId)
  //   console.log(closestDistance);
  //   onGuess({
  //     correct: false,
  //     distance: closestDistance,
  //     guessedPosition: markerPosition,
  //     correctPolygon: correctPolygonData,
  //   });
  // }

    console.log(currentPolys[currentMusicData[1]]);
  const currentPolyCenter = getCenterOfPolygon(currentPolys[currentMusicData[1]] as Point[]);
  map.panTo([currentPolyCenter[1], currentPolyCenter[0]]);
  
//   else
//   {
//     //setCurrentMapId(currentPolyData.mapId < 0 ? 0 : currentPolyData.mapId);
//     //setMapCenter([currentPolyCenter[0], currentPolyCenter[1]]);
//   }

  //finally, clear marker for the next song
  //setMarkerPosition(null);
}

