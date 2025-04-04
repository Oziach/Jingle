import { Feature, Polygon, Position } from 'geojson';
import { Line, Point } from '../types/geometry';
import { decodeHTML } from './string-utils';
import { ConvertedFeature } from '../data/GeoJSON';
import { LatLng, point, polygon } from 'leaflet';
import {groupedLinks, LinkData} from '../data/GroupedLinks';
import { mapNames } from '../data/MapNames';

const scaleFactor = 3;

enum MapIds{
  Surface = 0,
  DorgeshKaan = 5,
  KaramjaUnderground = 9,
  MisthalinUnderground = 12,
  MorUlRek = 23,
  Prifddinas = 29,
  PrifddinasUnderground = 34,
  CamTorum = 44,
  Neypotzli = 45,
}

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
  //should work, all undefined and debug map regions have negative mapIds. I don't know about instances tho.
  return feature.convertedGeometry.some((polyData) =>
    polyData.mapId >= 1
  );
}

export const GetClosestMapIdPolys = (correctFeature: ConvertedFeature, 
  markerPosition : LatLng, currentMapId: number) : [number[][][], number]=> {
  
  const calculateDistanceToPoly = (poly: Point[], mapId: number) => {
    return GetTotalDistanceToPoly([markerPosition.lng, markerPosition.lat], currentMapId, poly, mapId);
  };

  const validPolygons = correctFeature.convertedGeometry.filter(
      polyData => polyData.mapId >= 0
  );  

  if (validPolygons.length === 0) {
    return [[], -666];  
  }

  // Find poly with the shortest distance to markerPosition
  let closestPolyData = validPolygons[0];
  let minDistance = Infinity;

  for (let polyData of validPolygons) {
    const distance = calculateDistanceToPoly(polyData.coordinates as Point[], polyData.mapId);
    
    if (distance < minDistance) {
      minDistance = distance;
      closestPolyData = polyData;
    }
  }

  // Filter all polygons that belong to the closest mapId
  const closestPolygons = validPolygons.filter(
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

//only called if point and poly not on same map id
export const GetMinDistToExit = (origin : Point | Point[], mapId : number, exitMapId = 0) : [number, Point | null] => {
  
  if(mapId == MapIds.Prifddinas || mapId == MapIds.PrifddinasUnderground){return HandlePrif(origin, mapId, exitMapId);}

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


const GetNestedMinDistToSurfce = (origin : Point | Point[], mapId : number) : [number, Point | null] => {
  // Dorgesh Kaan
  if(mapId == MapIds.DorgeshKaan){
    const [dorgeshKaanExitDist, dorgeshKaanExit] = GetMinDistToExit(origin, mapId, MapIds.MisthalinUnderground);
    const [misthalinUndergroundExitDist, misthalinUndergroundExit] = GetMinDistToExit(dorgeshKaanExit!, MapIds.MisthalinUnderground, MapIds.Surface)  
    const dist = dorgeshKaanExitDist + misthalinUndergroundExitDist;   
    return [dist, misthalinUndergroundExit];
  }
  // Mor Ul Rek
  else if(mapId == MapIds.MorUlRek){
    const [morUlRekExitDist, morUlRekExit] = GetMinDistToExit(origin, mapId, MapIds.KaramjaUnderground);
    const [karamjaUndergroundExitDist, karamjaUndergroundExit] = GetMinDistToExit(morUlRekExit!, MapIds.KaramjaUnderground, MapIds.Surface);
    const dist = morUlRekExitDist + karamjaUndergroundExitDist;
    return [dist, karamjaUndergroundExit];
  }
  else if(mapId == MapIds.Neypotzli){
    const [neypotzliExitDist, neypotzliExit] = GetMinDistToExit(origin, mapId, MapIds.CamTorum);
    const [camoTorumExitDist, camTorumExit] = GetMinDistToExit(neypotzliExit!, MapIds.CamTorum, MapIds.Surface);
    const dist = neypotzliExitDist + camoTorumExitDist;
    return [dist, camTorumExit];
  }
  else{
    return [Infinity, null];
  }
}


//this is untested.
//oh god prifdinas still sounds like a pain. 
const HandleNestedDungeons = (point : Point, pointMapId : number, poly : Point[], polyMapId : number) : [boolean, number] => {
  
  if(pointMapId == polyMapId){return [false, Infinity];} // let the other function handle it
  const nestedMapIds = [MapIds.DorgeshKaan, MapIds.MorUlRek, MapIds.Neypotzli];
  const parentNestedPairs = [
    [MapIds.MisthalinUnderground, MapIds.DorgeshKaan], 
    [MapIds.KaramjaUnderground, MapIds.MorUlRek], 
    [MapIds.CamTorum, MapIds.Neypotzli]
  ];

  const AreInSameNestedRegion = (a: number, b: number) => {
    return parentNestedPairs.some(pair => pair.includes(a) && pair.includes(b));
  };

  //this only works because the inner mapIds only have one exit outside, and the outers have only one entrance inside.
  //wait lemme confirm actually sec. ok yeah we good, wiki map is just glitched again, only 1 in game.
  if(AreInSameNestedRegion(pointMapId, polyMapId)){
    const [pointExitDist, temp1] = GetMinDistToExit(point, pointMapId, polyMapId);
    const [polyExitDist, temp2] = GetMinDistToExit(poly, polyMapId, pointMapId);
    const totalDist = pointExitDist + polyExitDist;
    return [true, totalDist];
  }

  // //Clicked Mor Ul Rek - Poly in Karamja Underground
  // if(pointMapId == MapIds.MorUlRek && polyMapId == MapIds.KaramjaUnderground) {
  //   const [morUlRekExitDist, morUlRekExit] = GetMinDistToExit(point, pointMapId, MapIds.KaramjaUnderground);
  //   const totalDist = morUlRekExitDist + DistanceOnMapId(morUlRekExit!, poly);
  //   return [true, totalDist];
  // }
  // //Clicked Karamja Underground - Poly in Mor Ul Rek
  // else if(pointMapId == MapIds.KaramjaUnderground && polyMapId == MapIds.MorUlRek){
  //   const [morUlRekExitDist, morUlRekExit] = GetMinDistToExit(poly, polyMapId, MapIds.KaramjaUnderground);
  //   const totalDist = morUlRekExitDist + DistanceOnMapId(morUlRekExit!, point);
  //   return [true, totalDist]
  // }
  // //Clicked Dorgesh Kaan - Poly in Misthalin Underground
  // else if(pointMapId == MapIds.DorgeshKaan && polyMapId == MapIds.MisthalinUnderground){
  //   const [dorgeshKaanExitDist, dorgeshKaanExit] = GetMinDistToExit(point, pointMapId, MapIds.MisthalinUnderground);
  //   const totalDist = dorgeshKaanExitDist + DistanceOnMapId(dorgeshKaanExit!, poly);
  //   return [true, totalDist]
  // }
  // //Clicked Misthalin Underground - Poly in Dorgesh Kaan
  // else if(pointMapId == MapIds.MisthalinUnderground && polyMapId == MapIds.DorgeshKaan){
  //   const [dorgeshKaanExitDist, dorgeshKaanExit] = GetMinDistToExit(poly, polyMapId, MapIds.MisthalinUnderground);
  //   const totalDist = dorgeshKaanExitDist + DistanceOnMapId(dorgeshKaanExit!, point);
  //   return [true, totalDist]
  // }

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

  //TODO: RERACTOR THIS UGLY HEAP OF-s  
  const [handledNested, dist] = HandleNestedDungeons(point, pointMapId, poly, polyMapId);
  if(handledNested){return dist;}

  //poly surface, clicked elsewhere
  if(polyMapId == 0 && pointMapId != 0){
    const [pointDistanceToSurface, pointSurfaceExit] = GetMinDistToExit(point, pointMapId);
    if(pointSurfaceExit == null){console.log(`Couldn't find an exit for Map Id ${pointMapId}`); return Infinity}
    return pointDistanceToSurface as number + DistanceOnMapId(pointSurfaceExit as Point, poly);
  }

  //clicked surface, poly elsewhere...
  else if(pointMapId == 0 && polyMapId != 0){
    const [polyDistanceToSurface, polySurfaceExit] = GetMinDistToExit(poly, polyMapId);
    if(polySurfaceExit == null){console.log(`Couldn't find an exit for Map Id ${polyMapId}`); return Infinity}
    return polyDistanceToSurface as number + DistanceOnMapId(polySurfaceExit as Point, point);

  }

  //niether click nor poly on surface, clicked elsewhere not on same mapId
  else  if(pointMapId != polyMapId){
    const [pointDistanceToSurface, pointSurfaceExit] = GetMinDistToExit(point, pointMapId);
    const [polyDistanceToSurface, polySurfaceExit] = GetMinDistToExit(poly, polyMapId);
    
    if(pointSurfaceExit == null || polySurfaceExit == null){
      console.log(`Couldn't find an exit for one of Map Ids ${pointMapId} ,${polyMapId}`); 
      return Infinity
    }

    const surfaceDistance = DistanceOnMapId(pointSurfaceExit, polySurfaceExit)
    console.log("Point dist: ", pointDistanceToSurface, " Surface dist: ", surfaceDistance, " Poly dist: ", polyDistanceToSurface);
    return pointDistanceToSurface + surfaceDistance + polyDistanceToSurface;
  }

   //both on same mapId
  else{
    return DistanceOnMapId(point, poly) as number;
  }

}