import { Feature, Polygon, Position } from 'geojson';
import { Line, Point } from '../types/geometry';
import { decodeHTML } from './string-utils';
import { ConvertedFeature } from '../data/GeoJSON';
import { LatLng } from 'leaflet';
import {groupedLinks, LinkData} from '../data/GroupedLinks';
import { mapNames } from '../data/MapNames';
import { booleanContains, booleanPointInPolygon, polygon } from '@turf/turf';

export enum MapIds{
  Surface = 0,
  DorgeshKaan = 5,
  KaramjaUnderground = 9,
  MisthalinUnderground = 12,
  MorUlRek = 23,
  TarnsLair = 24,
  Prifddinas = 29,
  PrifddinasUnderground = 34,
  LMSWildVarrock = 38,
  LassarUndercity = 41,
  CamTorum = 44,
  Neypotzli = 45,
}

const nestedMapIds = [MapIds.DorgeshKaan, MapIds.MorUlRek, MapIds.Neypotzli];
const childParentMapIdPairs = [
  [MapIds.DorgeshKaan, MapIds.Surface],
  [MapIds.MorUlRek, MapIds.KaramjaUnderground],
  [MapIds.Neypotzli, MapIds.CamTorum]
]

// Ours refers to the pixel coordinates of the map grid we're using
// Theirs refers to the pixel coordinates taken from osrs wiki music info GeoJSON
export const toOurPixelCoordinates = ([x, y]: Position) =>
[x, y] as Point;
  // [x * scaleFactor - 3152, -(y * scaleFactor) + 12400] as Point;

export const closePolygon = (coordinates: number[][]) => {
  const repairedPolygon = [...coordinates];
  if (
    coordinates[0][0] !== coordinates[coordinates.length - 1][0] ||
    coordinates[0][1] !== coordinates[coordinates.length - 1][1]
  ) {
    repairedPolygon.push(coordinates[0]);
  }
  return repairedPolygon;
};

export const featureMatchesSong = (songName: string) => (feature: ConvertedFeature) => { //create a type for CustomFeature if 'any' won't do. 
  const featureSongName = decodeHTML(
    feature.properties?.title.match(/>(.*?)</)[1],
  );
  return featureSongName?.trim() === songName.trim();
};

export const calculateDistance = (
  point1: [number, number],
  point2: [number, number],
) => {
  const dx = point2[0] - point1[0];
  const dy = point2[1] - point1[1];
  return Math.sqrt(dx * dx + dy * dy);
}; // some basic euclidian mathematics

export const getCenterOfPolygon = (points: Point[]) => {
  const xSum = points.reduce((acc, [x, _]) => acc + x, 0);
  const ySum = points.reduce((acc, [_, y]) => acc + y, 0);
  return [xSum / points.length, ySum / points.length] as Point;
};

export const getDistanceToPolygon = (
  point: [number, number] | Point,
  polygon: Point[],
) => {
  const polygonLines = polygon.map(
    (point, i) => [point, polygon[(i + 1) % polygon.length]] as Line,
  );
  const distances = polygonLines.map((line) => getDistanceToLine(point, line));
  return Math.min(...distances);
};

export const getDistanceToLine = (point: [number, number], line: Line) => {
  const A = point[0] - line[0][0];
  const B = point[1] - line[0][1];
  const C = line[1][0] - line[0][0];
  const D = line[1][1] - line[0][1];

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;

  if (lenSq !== 0)
    // in case of 0 length line
    param = dot / lenSq;

  let xx, yy;

  if (param < 0) {
    xx = line[0][0];
    yy = line[0][1];
  } else if (param > 1) {
    xx = line[1][0];
    yy = line[1][1];
  } else {
    xx = line[0][0] + param * C;
    yy = line[0][1] + param * D;
  }

  const dx = point[0] - xx;
  const dy = point[1] - yy;

  return Math.sqrt(dx * dx + dy * dy);
};

export const isFeatureVisibleOnMap = (feature: ConvertedFeature) => {
const FORBIDDEN_MAP_IDS = [MapIds.LassarUndercity, MapIds.LMSWildVarrock, MapIds.TarnsLair]
  return feature.convertedGeometry.some(polyData => FORBIDDEN_MAP_IDS.includes(polyData.mapId)) == false 
  && feature.convertedGeometry.length > 0
}


const FindGaps = (repairedPolygons: Point[][]) => {
   return repairedPolygons.filter(innerPolygon => 
    repairedPolygons.find(outerPolygon =>
      innerPolygon !== outerPolygon && booleanContains(polygon([outerPolygon]), polygon([innerPolygon]))
    )
   )
}

const FindOuters = (repairedPolygons: Point[][]): Point[][] => {
  return repairedPolygons.filter(candidate =>
    !repairedPolygons.some(other =>
      candidate !== other &&
      booleanContains(polygon([other]), polygon([candidate]))
    )
  );
};

export const FindPolyGroups = (repairedPolygons : Point[][]) => {
  const groups : Point[][][] = [];

  const gaps = FindGaps(repairedPolygons);
  const outers = FindOuters(repairedPolygons);

  outers.forEach(poly => {
    const innerGaps = gaps.filter( (gap) => 
      booleanContains(polygon([poly]), polygon([gap]))
    )
    groups.push([poly, ...innerGaps])
  })

  return groups;
}

//return polys, mapId.
export const GetClosestMapIdPolys = (correctFeature: ConvertedFeature, 
  markerPosition : LatLng, markerMapId: number, currentMapId: number) : [number[][][], number]=> {
  
  const calculateDistanceToPoly = (poly: Point[], mapId: number) => {
    return GetTotalDistanceToPoly([markerPosition.lng, markerPosition.lat], markerMapId, poly, mapId);
  };

  const currentPolyDatas = correctFeature.convertedGeometry;
  let validPolys = []; 

  //first prioritize polys on same mapId as guess
  const sameMapIdPolyDatas = currentPolyDatas.filter((polyData) => polyData.mapId == markerMapId)
  if (sameMapIdPolyDatas.length > 0) {return [sameMapIdPolyDatas.map(polyData => polyData.coordinates), markerMapId]}


  //next prioritize surface polys
  const surfacePolys = currentPolyDatas.filter((polyData) => polyData.mapId == markerMapId)
  if (surfacePolys.length > 0) {return [surfacePolys.map(polyData => polyData.coordinates), 0]}


  //Otherwise, find poly with the shortest distance to markerPosition
  let closestPolyData = currentPolyDatas[0];
  let minDistance = Infinity;

  for (let polyData of currentPolyDatas) {
    const distance = calculateDistanceToPoly(polyData.coordinates as Point[], polyData.mapId);

    if (distance < minDistance) {
      minDistance = distance;
      closestPolyData = polyData;
    }
  }

  const closestPolygons = currentPolyDatas.filter(
    polyData => polyData.mapId === closestPolyData.mapId
  );

  return [closestPolygons.map(polyData => polyData.coordinates), closestPolyData.mapId];

}

const PrifMapIdCoordsToSurfaceCoords = (point : Point) : Point=> {
  return [point[0] - 1024 , point[1]-2750.5]
}

const FindClosestLink = (origin: Point | Point[], isPoly : boolean, validLinks : LinkData[]) =>{
  
  return validLinks.reduce(
    (closest, link) => {
      const dist = isPoly ?  getDistanceToPolygon([link.start.x, link.start.y], origin as Point[]) 
      : Math.hypot(link.start.x - (origin as Point)[0], link.start.y - (origin as Point)[1]);
  
      return !closest.closestLink || dist < closest.distance
        ? { closestLink: link, distance: dist }
        : closest;
    },
    { closestLink: null as LinkData | null, distance: Infinity }
  );
}

//this is cringe.
const HandlePrif = (origin : Point | Point[], mapId : number, rawExitMapId : number) : [number, Point | null] => {
  
  const isPoly = Array.isArray(origin[0]);

  //treat as if on geilinor surface
  if(!isPoly && mapId == MapIds.Prifddinas){return [0, PrifMapIdCoordsToSurfaceCoords(origin as Point)]}

  const exitMapId = rawExitMapId == 0 ? MapIds.Prifddinas : rawExitMapId;
  const mapName = mapNames[mapId]; 

  const links = groupedLinks[mapName] ?? [];
  const validLinks = links.filter(link => link.end.mapId === exitMapId);
  if (validLinks.length === 0) return [Infinity, null]; 
  const { closestLink, distance } = FindClosestLink(origin, isPoly, validLinks);

  const exitPoint =  [closestLink!.end.x, closestLink!.end.y] as Point;
  
  return [mapId == MapIds.PrifddinasUnderground ? distance : 0 , 
    mapId == MapIds.PrifddinasUnderground ? PrifMapIdCoordsToSurfaceCoords(exitPoint) : exitPoint];
}


export const GetMinDistToExit = (origin : Point | Point[], mapId : number, exitMapId = 0) : [number, Point | Point[] | null] => {
  
  if(mapId == MapIds.Prifddinas || mapId == MapIds.PrifddinasUnderground){return HandlePrif(origin, mapId, exitMapId);}
  if(mapId == MapIds.Surface){return [0, origin]}

  const isPoly = Array.isArray(origin[0]);
  const mapName = mapNames[mapId]; 

    // Get all links for this map
    const links = groupedLinks[mapName] ?? [];

    const validLinks = links.filter(link => link.end.mapId === exitMapId);
    if (validLinks.length === 0) return [0, null]; 
  
  // Find the closest link
  const { closestLink, distance } = FindClosestLink(origin, isPoly, validLinks);

  if (closestLink) {
    return [
      distance,
      [closestLink.end.x, closestLink.end.y] 
    ] as [number, Point];
  }

  // If no valid closestLink, return a fallback value
  return [0, null as Point | null];
}

const DistanceBetweenPoints = (a : Point, b : Point) =>{ 
  return Math.hypot(
  (a as Point)[0] - (b as Point)[0],
  (a as Point)[1] - (b as Point)[1]
) as number;}

const DistanceOnMapId = (a : Point | Point[], b: Point | Point[]) : number => {
  
  const aIsPoly = Array.isArray(a[0]); 
  const bIsPoly = Array.isArray(b[0]);

  if(!aIsPoly && !bIsPoly){
    return DistanceBetweenPoints(a as Point, b as Point);
  }
  else if(aIsPoly && !bIsPoly){
    return getDistanceToPolygon(b as Point, a as Point[]);
  }
  else if(!aIsPoly && bIsPoly){
    return getDistanceToPolygon(a as Point, b as Point[]);
  }
  else{
    console.log("Both inputs are polys. Something weird is happening.");
    return Infinity;
  }
}


const GetNestedMinDistToSurfce = (origin : Point | Point[], childMapId : number) : [number, Point | Point[] | null] => {

  const childParentMapIdPair = childParentMapIdPairs.find(pair => pair[0] == childMapId);
  if(!childParentMapIdPair){return [Infinity, null];}
  
  const parentMapId = childParentMapIdPair[1];

  const [childExitDist, childExit] = GetMinDistToExit(origin, childMapId, parentMapId);
  const [parentExitDist, parentExit] = GetMinDistToExit(childExit!, parentMapId, MapIds.Surface);
  const dist = childExitDist + parentExitDist;
  return [dist, parentExit];
}


const HandleNestedDungeons = (point : Point, pointMapId : number, poly : Point[], polyMapId : number) : [boolean, number] => {
  
  if(pointMapId == polyMapId){return [false, Infinity];} // let the other function handle it


  const AreInSameNestedRegion = (a: number, b: number) => {
    return childParentMapIdPairs.some(pair => pair.includes(a) && pair.includes(b));
  };

  //this only works because the inner mapIds only have one exit outside, and the outers have only one entrance inside.
  //wait lemme confirm actually sec. ok yeah we good, wiki map is just glitched again, only 1 in game.
  if(AreInSameNestedRegion(pointMapId, polyMapId)){
    const [pointExitDist, temp1] = GetMinDistToExit(point, pointMapId, polyMapId);
    const [polyExitDist, temp2] = GetMinDistToExit(poly, polyMapId, pointMapId);
    const totalDist = pointExitDist + polyExitDist;
    return [true, totalDist];
  }

  //click and poly both nested
  else if(nestedMapIds.includes(polyMapId) && nestedMapIds.includes(pointMapId)){
      const [pointDist, pointSurfaceExit ] = GetNestedMinDistToSurfce(point, pointMapId);
      const [polyDist, polySurfaceExit] = GetNestedMinDistToSurfce(poly, polyMapId);
      const surfaceDist = DistanceOnMapId(pointSurfaceExit!, polySurfaceExit!);
      return [true, pointDist + polyDist + surfaceDist];
  }
   
  //point nested
  else if(nestedMapIds.includes(pointMapId)){
    const [pointDist, pointSurfaceExit ] = GetNestedMinDistToSurfce(point, pointMapId);
    const [polyDist, polySurfaceExit] = GetMinDistToExit(poly, polyMapId);

    if(polySurfaceExit == null){console.log("No exit found for ", polyMapId); return [true, Infinity]};
    const surfaceDist = DistanceOnMapId(pointSurfaceExit!, polySurfaceExit);
    return [true, pointDist + polyDist + surfaceDist];
  }
  //poly nested
  else if(nestedMapIds.includes(polyMapId)){
    const [pointDist, pointSurfaceExit] = GetMinDistToExit(point, pointMapId);
    const [polyDist, polySurfaceExit] = GetNestedMinDistToSurfce(poly, polyMapId);

    if(pointSurfaceExit == null){console.log("No exit found for ", pointMapId); return [true, Infinity]};
    const surfaceDist = DistanceOnMapId(pointSurfaceExit, polySurfaceExit!);
    return [true, pointDist + polyDist + surfaceDist];
  }

  return[false, Infinity];
}


export const GetTotalDistanceToPoly = (point : Point, pointMapId : number, poly : Point[], polyMapId : number) => {

  const [handledNested, dist] = HandleNestedDungeons(point, pointMapId, poly, polyMapId);
  if(handledNested){return dist;}

  const [pointDistToSurface, pointSurfaceOrigin] = GetMinDistToExit(point, pointMapId);
  const [polyDistToSurface, polySurfaceOrigin] = GetMinDistToExit(poly, polyMapId);
  if(pointSurfaceOrigin == null || polySurfaceOrigin == null) {return Infinity;}

  return pointDistToSurface + polyDistToSurface + DistanceOnMapId(pointSurfaceOrigin, polySurfaceOrigin);

}