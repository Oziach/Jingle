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
  PrifddinasGrandLibrary = 35,
  LMSWildVarrock = 38,
  Abyss = 40,
  LassarUndercity = 41,
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

export const getCenterOfPolygon = (points: Point[]) => {
  const xSum = points.reduce((acc, [x, _]) => acc + x, 0);
  const ySum = points.reduce((acc, [_, y]) => acc + y, 0);
  return [xSum / points.length, ySum / points.length] as Point;
};


export const isFeatureVisibleOnMap = (feature: ConvertedFeature) => {
const FORBIDDEN_MAP_IDS = [MapIds.LassarUndercity, MapIds.LMSWildVarrock, MapIds.TarnsLair, MapIds.Abyss]
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

