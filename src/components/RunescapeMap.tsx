import '../style/miscMapUI.css'
import {booleanPointInPolygon, polygon } from '@turf/turf';
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
  FindPolyGroups,
  getCenterOfPolygon,
} from '../utils/map-utils';
import { ConfigureMap, HandleMapZoom, InternalMapState, LINKLESS_MAP_IDS, mapSelectBaseMaps} from '../utils/map-config';
import basemaps from '../data/basemaps';
import { groupedLinks } from '../data/GroupedLinks';
import LinkClickboxes from './LinkClickboxes';
import { GetClosestMapIdPolys, GetTotalDistanceToPoly } from '../utils/score-dist-utils';

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
  const [zoom, setZoom] = useState(1); 
  const [mapCenter, setMapCenter] = useState([3222, 3218]); //lumby
  const mapIdPadding = currentMapId == 0 ? -64 : 256; //in game tiles
  const [markerState, setMarkerState] = useState({
    markerPosition: null as L.LatLng | null,
    markerMapId: 0,
  });
  const currentMap = basemaps[currentMapId];

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
      minZoom={0}
      style={{ height: "100vh", width: "100%", background: "black" }}
      maxBoundsViscosity={0.5}
      className={className}
      maxBounds={[
        [currentMap.bounds[0][1] - mapIdPadding, currentMap.bounds[0][0] - mapIdPadding],                                     
        [currentMap.bounds[1][1] + mapIdPadding, currentMap.bounds[1][0] + mapIdPadding],
      ]}
    >
      {/* Map Selector - Temp. This belongs outside.*/}
      <select
        onChange = {(e) => OnMapSelect(e)} 
        value={currentMapId!}
        className="map-select"
      >
        {mapSelectBaseMaps.map((map) => {
          if(!LINKLESS_MAP_IDS.includes(map.mapId)) {
            return(
              <option key={map.mapId} value={map.mapId}>
                {map.name}
              </option>
          )}
    })}
      </select>

      <RunescapeMap 
        {...props}
        setMapCenter={setMapCenter} 
        zoom={zoom} setZoom={setZoom} 
        markerState={markerState} setMarkerState={setMarkerState}
        currentMapId={currentMapId} setCurrentMapId={setCurrentMapId}  
      />

    </MapContainer>
  );
}

function RunescapeMap({ gameState, onGuess, confirmedGuess, setShowConfirmGuess, currentMapId, setCurrentMapId, 
  setMapCenter, zoom, setZoom, markerState, setMarkerState}: InternalMapState) {
  
  const currentSong = gameState.songs[gameState.round];
  const currentMap = basemaps[currentMapId];
  const map = useMap();

  //trigger. better solutions?
  const linkClick = useRef(false); 

  //map links
  const linksData = {
    mapIdLinks: groupedLinks[currentMap.name],
    setCurrentMapId: setCurrentMapId,
    setMapCenter: setMapCenter,
    linkClick: linkClick,
    map: map,
  }
  

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

      //maplink consume click event
      if(linkClick.current){linkClick.current = false; return; } 
      
      if(markerState.markerPosition === null){setShowConfirmGuess(true);}
      setMarkerState({markerPosition: e.latlng, markerMapId: currentMapId});
      console.log(e.latlng, currentMapId);
    },
  });

  useEffect(()=>{
    if(!confirmedGuess){return;}
    OnConfirmGuess({setMapCenter, map, markerState, setMarkerState, currentSong, onGuess, currentMapId, setCurrentMapId});
  },[confirmedGuess]) 

  return (
    <>  

      <LinkClickboxes {...linksData}/>
      
      {markerState.markerPosition && markerState.markerMapId == currentMapId && 
      < Marker
        interactive={false}
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
        <>{gameState.guessedPosition.mapId == currentMapId && 
          <Marker
            position={gameState.guessedPosition.position!}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          />}

          {/* render all polys on current mapId */}
          {currentMapId == gameState.correctPolygons.mapId &&
           gameState.correctPolygons.polygons!.map(correctPolygon => { 
          return <GeoJSON
            data={[correctPolygon]}
            interactive={false}
            style={() => ({
              color: '#0d6efd', // Outline color
              fillColor: '#0d6efd', // Fill color
              weight: 5, // Outline thickness
              fillOpacity: 0.5, // Opacity of fill
              transition: 'all 2000ms',
            })}
          />
          })}
        </>
      )}
    </>
  );
}

//bleh
interface OnConfirmGuessArgs{
  setMarkerState: React.Dispatch<React.SetStateAction<{markerPosition: L.LatLng | null; markerMapId: number;}>>,
  markerState: {markerPosition: L.LatLng | null;markerMapId: number;}, 
  setMapCenter: React.Dispatch<React.SetStateAction<number[]>> ,
  setCurrentMapId: React.Dispatch<React.SetStateAction<number>>
  onGuess: (guess: Guess) => void, 
  currentSong: string,
  currentMapId: number, 
  map: L.Map, 
}

function OnConfirmGuess({setMarkerState, markerState, setMapCenter, setCurrentMapId, onGuess, currentSong, currentMapId, map} : OnConfirmGuessArgs) {

  const {markerPosition, markerMapId} = markerState;
  if(!markerPosition){return;}

  const ourPixelCoordsClickedPoint = [markerPosition.lng, markerPosition.lat] as Point
  console.log(ourPixelCoordsClickedPoint);

  const correctFeature = geojsondata.features.find(
    featureMatchesSong(currentSong)
  )!;

  //all polys for for current song as per our mapId priorities - needed for donut polys.
  const [musicPolys, songMapId] = GetClosestMapIdPolys(correctFeature, markerPosition, markerMapId);
  const repairedPolygons = musicPolys.map((musicPoly)=>closePolygon(musicPoly)) as Point[][];
  
  //find nearest correct poly
  const correctPolygon = repairedPolygons.sort(
    (polygon1, polygon2) => {
      const d1 = GetTotalDistanceToPoly(ourPixelCoordsClickedPoint, markerMapId, polygon1, songMapId);
      const d2 = GetTotalDistanceToPoly(ourPixelCoordsClickedPoint, markerMapId, polygon2, songMapId);
      return d1 - d2;
    }
  )[0];
  
  const polyGroups = FindPolyGroups(repairedPolygons);
  const [outerPolygon, ...gaps] = polyGroups.find(polyGroup => polyGroup.includes(correctPolygon)) ?? [correctPolygon]

  //check if in outer poly
  const inOuterPoly = booleanPointInPolygon(
    ourPixelCoordsClickedPoint,
    polygon([outerPolygon])
  );
  
  // Check if the clicked point is inside any gap
  const isInsideGap = gaps.some((gap) => booleanPointInPolygon(ourPixelCoordsClickedPoint, polygon([gap]))
  );
  //merge the two. mapId check needed to filter overlapping coords in diff mapIds.
  const correctClickedFeature = inOuterPoly && !isInsideGap && markerMapId == songMapId;
  
  const correctPolygonsData = polyGroups.map((polyGroup)=> {
    return({
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: polyGroup,
    },
  } as GeoJsonObject);})

  if (correctClickedFeature) {
    onGuess({
      correct: true,
      distance: 0,
      guessedPosition: {mapId: markerMapId, position: markerPosition},
      correctPolygons: {mapId: songMapId , polygons: correctPolygonsData},
    });
  } else {
    //restored border distance calcs.
    const closestDistance = GetTotalDistanceToPoly([markerPosition.lng, markerPosition.lat], markerMapId, correctPolygon, songMapId)
    console.log(closestDistance);
    onGuess({
      correct: false,
      distance: closestDistance,
      guessedPosition: {mapId: markerMapId, position: markerPosition},
      correctPolygons: {mapId: songMapId ,polygons: correctPolygonsData},
    });
  }


  const outerPolyCenter = getCenterOfPolygon(outerPolygon);
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

