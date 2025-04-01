import '../style/miscMapUI.css'
import { booleanContains, booleanPointInPolygon, polygon } from '@turf/turf';
import { GeoJsonObject } from 'geojson';
import L, { CRS, Icon, LatLng, tileLayer } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import {
  GeoJSON,
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import geojsondata from '../data/GeoJSON';
import { Guess } from '../hooks/useGameLogic';
import { Point } from '../types/geometry';
import { GameState, GameStatus } from '../types/jingle';
import {
  calculateDistance,
  closePolygon,
  featureMatchesSong,
  getCenterOfPolygon,
  getDistanceToPolygon,
  toOurPixelCoordinates,
} from '../utils/map-utils';
import { basemaps} from '../data/basemaps';
import { groupedLinks } from '../data/GroupedLinks';
import LinkClickboxes from './LinkClickboxes';



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
}
;

export default function RunescapeMapWrapper({
  className,
  ...props
}: RunescapeMapProps) {

  const [currentMapId, setCurrentMapId] = useState(0);
  const currentMap = basemaps[currentMapId];
  const [zoom, setZoom] = useState(1); 
  const [mapCenter, setMapCenter] = useState([currentMap.center[1], currentMap.center[0]]);
  const mapRef = useRef<L.Map>(null);



  return (
    <MapContainer
      crs={CRS.Simple}
      key={currentMapId}
      ref={mapRef}
      center={[mapCenter[1], mapCenter[0]]}
      zoom={zoom}
      maxZoom={3}
      minZoom={-3}
      style={{ height: "100vh", width: "100%", background: "black" }}
      maxBounds={[
        [currentMap.bounds[0][1], currentMap.bounds[0][0]],
        [currentMap.bounds[1][1], currentMap.bounds[1][0]],
      ]}
      maxBoundsViscosity={0.5}
      className={className}
    >
      {/* Map Selector */}
      <select
        onChange={(e) => {
          const newMapId = Number.parseInt(e.target.value);
          setCurrentMapId!(newMapId);
          setMapCenter([basemaps[newMapId].center[1], basemaps[newMapId].center[0]]);
        }}
        value={currentMapId!}
        className="map-select"
      >
        {basemaps.map((map) => (
          <option key={map.mapId} value={map.mapId}>
            {map.name}
          </option>
        ))}
      </select>

      <RunescapeMap {...props} currentMapId={currentMapId} setCurrentMapId={setCurrentMapId} 
      setMapCenter={setMapCenter} zoom={zoom} setZoom={setZoom}/>

    </MapContainer>
  );
}

function RunescapeMap({ gameState, onGuess, confirmedGuess, setShowConfirmGuess, currentMapId, setCurrentMapId, 
  setMapCenter, zoom, setZoom}: RunescapeMapPropsInner) {
  
  const currentSong = gameState.songs[gameState.round];
  const currentMap = basemaps[currentMapId!];
  const [markerPosition, setMarkerPosition] = useState<L.LatLng | null>(null);

  const map = useMap(); // Get Leaflet map instance
  
  useEffect(()=>{
  
    if(!map){return;}
  
    class CustomTileLayer extends L.TileLayer {
      getTileUrl(coords: L.Coords): string {
        const { x, y, z } = coords;
        
        //leaflet's tms DOESN'T GODDAMN WORK.
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
      if(markerPosition === null){setShowConfirmGuess(true);}
      setMarkerPosition(e.latlng);
      console.log(e.latlng);
    },
  });

  useEffect(()=>{
    if(!confirmedGuess){return;}
    OnConfirmGuess(map, markerPosition, setMarkerPosition, currentSong, onGuess);
  },[confirmedGuess]) 

  return (
    <>  

       {markerPosition && < Marker
            position={markerPosition}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          />}
        
      <LinkClickboxes mapIdLinks={groupedLinks[currentMap.name]}
       setCurrentMapId={setCurrentMapId} setMapCenter={setMapCenter}/>
      
      {gameState.status === GameStatus.AnswerRevealed && (
        <>
          <Marker
            position={gameState.guessedPosition!}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          />

          <GeoJSON
            data={gameState.correctPolygon!}
            style={() => ({
              color: '#0d6efd', // Outline color
              fillColor: '#0d6efd', // Fill color
              weight: 5, // Outline thickness
              fillOpacity: 0.5, // Opacity of fill
              transition: 'all 2000ms',
            })}
          />
        </>
      )}
      {/* <TileLayer
        attribution='offline'
        url={`/rsmap-tiles/mapIdTiles/0/{z}/{x}/{y}.png`}
      /> */}
    </>
  );
}

function OnConfirmGuess(map: L.Map, markerPosition: L.LatLng | null, setMarkerPosition: React.Dispatch<React.SetStateAction<L.LatLng | null>>,
  currentSong: string, onGuess: (guess: Guess) => void) {
  if(!markerPosition){return;} //TEMP SOL. TODO: MAKE IT SO CONFIRM GUESS BUTTON IS ONLY VISIBLE IF MARKER IS PLACED.
  const zoom = map.getMaxZoom();
  const { x, y } = map.project(markerPosition, zoom);
  console.log(markerPosition);
  const ourPixelCoordsClickedPoint = [x, y] as Point;


  const correctFeature = geojsondata.features.find(
    featureMatchesSong(currentSong)
  )!;

  //all closed polys for current song
  const repairedPolygons = correctFeature.geometry.coordinates.map(closePolygon);

  // Create a GeoJSON feature for the nearest correct polygon
  const correctPolygon = correctFeature.geometry.coordinates.sort(
    (polygon1, polygon2) => {
      const c1 = getCenterOfPolygon(polygon1.map(toOurPixelCoordinates));
      const c2 = getCenterOfPolygon(polygon2.map(toOurPixelCoordinates));
      const d1 = calculateDistance(ourPixelCoordsClickedPoint, c1);
      const d2 = calculateDistance(ourPixelCoordsClickedPoint, c2);
      return d1 - d2;
    }
  )[0];

  //if closest correct polgy is a gap, set outerPolygon to the actual parent poly, else iteself.
  const repairedCorrectPolygon = closePolygon(correctPolygon);

  const outerPolygon = repairedPolygons.find((repairedPolygon) => {
    if (JSON.stringify(repairedPolygon) !==
      JSON.stringify(repairedCorrectPolygon)) {
      return booleanContains(
        polygon([repairedPolygon]),
        polygon([repairedCorrectPolygon])
      );
    }
    return false;
  }) || repairedCorrectPolygon;

  //find all gaps in this outer polygon
  const gaps = repairedPolygons.filter(
    (repairedPolygon) => JSON.stringify(repairedPolygon) !== JSON.stringify(outerPolygon) &&
      booleanContains(polygon([outerPolygon]), polygon([repairedPolygon]))
  );

  const correctPolygons = [outerPolygon, ...gaps];

  //check user click is right or wrong:
  //for checking aginst click, convert everything to our coords
  const ourOuterPolygon = outerPolygon.map(toOurPixelCoordinates);
  const ourGaps = gaps?.map((gap) => gap.map(toOurPixelCoordinates)) ?? [];
  //check if in outer poly
  const inOuterPoly = booleanPointInPolygon(
    ourPixelCoordsClickedPoint,
    polygon([ourOuterPolygon])
  );
  // Check if the clicked point is inside any hole
  const isInsideGap = ourGaps.some((gap) => booleanPointInPolygon(ourPixelCoordsClickedPoint, polygon([gap]))
  );
  //merge the two
  const correctClickedFeature = inOuterPoly && !isInsideGap;

  //coords for <GeoJSON>
  const convertedCoordinates = correctPolygons.map(
    (polygon) => polygon //their pixel coords
      .map(toOurPixelCoordinates) // 2.our pixel coords
      .map((coordinate) => map.unproject(coordinate, zoom)) // 3. leaflet { latlng }
      .map(({ lat, lng }) => [lng, lat])
  );

  const correctPolygonData = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: convertedCoordinates,
    },
  } as GeoJsonObject;

  if (correctClickedFeature) {
    onGuess({
      correct: true,
      distance: 0,
      guessedPosition: markerPosition,
      correctPolygon: correctPolygonData,
    });
  } else {
    //restored border distance calcs
    const closestDistance = Math.min(
      ...correctFeature.geometry.coordinates.map((polygon) => getDistanceToPolygon(
        ourPixelCoordsClickedPoint,
        polygon.map(toOurPixelCoordinates)
      )
      )
    );

    onGuess({
      correct: false,
      distance: closestDistance,
      guessedPosition: markerPosition,
      correctPolygon: correctPolygonData,
    });
  }

  map.panTo(
    map.unproject(
      getCenterOfPolygon(
        ourOuterPolygon
      ),
      zoom
    )
  );

  //finally, clear marker for the next song
  setMarkerPosition(null);
}

