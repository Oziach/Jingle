import { Feature, Polygon, Position } from 'geojson';
import { Line, Point } from '../types/geometry';
import { decodeHTML } from './string-utils';
import { ConvertedFeature } from '../data/GeoJSON';
import { LINKLESS_MAP_IDS } from './map-config';
import { booleanContains, polygon } from '@turf/turf';

const scaleFactor = 3;
// Ours refers to the pixel coordinates of the map grid we're using
// Theirs refers to the pixel coordinates taken from osrs wiki music info GeoJSON
export const toOurPixelCoordinates = ([x, y]: Position) =>
  [x * scaleFactor - 3152, -(y * scaleFactor) + 12400] as Point;

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

export const featureMatchesSong = (songName: string) => (feature: Feature) => {
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
  point: [number, number],
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

// export const isFeatureVisibleOnMap = (feature: Feature<Polygon>) =>
//   feature.geometry.coordinates.some((polygon) =>
//     polygon.every((point) => {
//       const [, y] = toOurPixelCoordinates(point);
//       return y > 0;
//     }),
//   );

export const isFeatureVisibleOnMap = (feature: ConvertedFeature) => {
  return feature.convertedGeometry.some(polyData => LINKLESS_MAP_IDS.includes(polyData.mapId)) == false 
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
