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
  useMap,
  useMapEvents,
} from 'react-leaflet';
import geojsondata from '../data/GeoJSON';
import { Guess } from '../hooks/useGameLogic';
import { Point } from '../types/geometry';
import { GameState, GameStatus } from '../types/jingle';
import {
  closePolygon,
  featureMatchesSong,
  getCenterOfPolygon,
  GetClosestMapIdPolys,
  getDistanceToPolygon,
  GetTotalDistanceToPoly,
  toOurPixelCoordinates,
} from '../utils/map-utils';
import { ConfigureMap, HandleMapZoom, InternalMapState } from '../utils/map-config-utils';

import { basemaps } from '../utils/map-config-utils';
import { groupedLinks } from '../data/GroupedLinks';
import LinkClickboxes from './LinkClickboxes';

interface RunescapeMapProps {
  gameState: GameState;
  onGuess: (guess: Guess) => void;
  className?: string;
  confirmedGuess: boolean; 
  setShowConfirmGuess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RunescapeMapWrapper({
  className,
  ...props
}: RunescapeMapProps) {
  
  //map state
  const [currentMapId, setCurrentMapId] = useState(0);
  const currentMap = basemaps[currentMapId];

  const [zoom, setZoom] = useState(1); 
  const [mapCenter, setMapCenter] = useState([3222, 3218]); //lumby
  const mapIdPadding = currentMapId == 0 ? -64 : 256; //in game tiles. 64 tiles per square.
  const [markerState, setMarkerState] = useState({
    markerPosition: null as L.LatLng | null,
    markerMapId: 0,
  });

  const OnMapSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const newMapId = Number.parseInt(e.target.value);
    setCurrentMapId!(newMapId);
    setMapCenter(basemaps[newMapId].center);
  }

  return (
    <MapContainer
      crs={CRS.Simple}
      key={currentMapId} 
      center={[mapCenter[1], mapCenter[0]]}
      zoom={zoom}
      maxZoom={3}
      minZoom={-1                                                                                                                                                                                     }
      style={{ height: "100vh", width: "100%", background: "black" }}
      maxBoundsViscosity={0.5}
      className={className}
      maxBounds={[
        [currentMap.bounds[0][1] - mapIdPadding, currentMap.bounds[0][0] - mapIdPadding],                                     
        [currentMap.bounds[1][1] + mapIdPadding, currentMap.bounds[1][0] + mapIdPadding],
      ]}
    >
      {/* Map Selector */}
      <select
        onChange = {(e) => OnMapSelect(e)} 
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
      setMapCenter={setMapCenter} zoom={zoom} setZoom={setZoom} markerState={markerState} setMarkerState={setMarkerState}/>

    </MapContainer>
  );
}

function RunescapeMap({ gameState, onGuess, confirmedGuess, setShowConfirmGuess, currentMapId, setCurrentMapId, 
  setMapCenter, zoom, setZoom, markerState, setMarkerState}: InternalMapState) {
  
  const currentSong = gameState.songs[gameState.round];
  const currentMap = basemaps[currentMapId];
  const map = useMap();

  //modified tile layer for bottom origin and 0_x_y.png format
  useEffect(()=>{

    if(!map){return;}
    ConfigureMap(map, currentMapId)

  }, [map])

  //override map zoom, to not reset when changing mapIds
  useEffect(()=>{
    HandleMapZoom(map, setZoom);
  },[zoom])
  


  //handle marker state
  useMapEvents({
    click: async (e) => { 
      if (gameState.status !== GameStatus.Guessing) return;
      if(markerState.markerPosition === null){setShowConfirmGuess(true);}
      setMarkerState({markerPosition: e.latlng, markerMapId: currentMapId});
      console.log(e.latlng);
    },
  });

  useEffect(()=>{
    if(!confirmedGuess){return;}
    OnConfirmGuess(setMapCenter, map, markerState, setMarkerState, currentSong, onGuess, currentMapId, setCurrentMapId);
  },[confirmedGuess]) 

  return (
    <>  

      <LinkClickboxes mapIdLinks={groupedLinks[currentMap.name]} map={map}
       setCurrentMapId={setCurrentMapId} setMapCenter={setMapCenter}/>
      
      {markerState.markerPosition && markerState.markerMapId == currentMapId && < Marker
        position={markerState.markerPosition}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      />}
        
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
    </>
  );
}

function OnConfirmGuess(setMapCenter: React.Dispatch<React.SetStateAction<number[]>> ,map: L.Map, markerState: {markerPosition: L.LatLng | null;markerMapId: number;}, 
  setMarkerState: React.Dispatch<React.SetStateAction<{markerPosition: L.LatLng | null; markerMapId: number;}>>,
  currentSong: string, onGuess: (guess: Guess) => void, currentMapId: number, setCurrentMapId: React.Dispatch<React.SetStateAction<number>>) {

  console.log(markerState);
  const {markerPosition, markerMapId} = markerState;
  if(!markerPosition){return;}

  const ourPixelCoordsClickedPoint = [markerPosition.lng, markerPosition.lat] as Point
  console.log(ourPixelCoordsClickedPoint);

  const correctFeature = geojsondata.features.find(
    featureMatchesSong(currentSong)
  )!;

  //all polys for for current song as per our mapId priorities - needed for donut polys.
  //const repairedPolygons = correctFeature.geometry.coordinates.map(closePolygon);
  const [musicPolys, songMapId] = GetClosestMapIdPolys(correctFeature, markerPosition, markerMapId, currentMapId);
  const repairedPolygons = musicPolys.map((musicPoly)=>closePolygon(musicPoly));

  // Create a GeoJSON feature for the nearest correct polygon
  const correctPolygon = repairedPolygons.sort(
    (polygon1, polygon2) => {
      const d1 = getDistanceToPolygon(ourPixelCoordsClickedPoint, polygon1 as Point[]);
      const d2 = getDistanceToPolygon(ourPixelCoordsClickedPoint, polygon2 as Point[]);
      return d1 - d2;
    }
  )[0];

  //if closest correct polgy is a gap, set outerPolygon to the actual parent poly, else iteself.
  const repairedCorrectPolygon = correctPolygon; 
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
      .map((coordinate) => (coordinate) // 3. leaflet { latlng }
  )
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
    //restored border distance calcs.
    const closestDistance = GetTotalDistanceToPoly([markerPosition.lng, markerPosition.lat], currentMapId, correctPolygon as Point[], songMapId)
    console.log(closestDistance);
    onGuess({
      correct: false,
      distance: closestDistance,
      guessedPosition: markerPosition,
      correctPolygon: correctPolygonData,
    });
  }


  const outerPolyCenter = getCenterOfPolygon(ourOuterPolygon);
  if(songMapId == currentMapId){
    map.panTo([outerPolyCenter[1], outerPolyCenter[0]]);
  }
  else
  {
    setCurrentMapId(songMapId);
    setMapCenter([outerPolyCenter[0], outerPolyCenter[1]]);
  }

  //finally, clear marker for the next song
  setMarkerState({markerPosition: null, markerMapId: 0});
}

