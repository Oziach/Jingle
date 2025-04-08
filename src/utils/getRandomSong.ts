import geojsondata from '../data/GeoJSON';
import { isFeatureVisibleOnMap } from './map-utils';
import { decodeHTML } from './string-utils';

const playedSongs = new Set();
const playedSongsOrder: string[] = [];

export const getRandomSong = () => {
  return getRandomSongByTitle("Wilderness")!;
  let randomSongName: string | null = '';
  const visibleFeatures = geojsondata.features.filter(isFeatureVisibleOnMap);
  do {
    const randomFeature = visibleFeatures.sort(
      () => Math.random() - Math.random(),
    )[0];
    randomSongName = decodeHTML(
      randomFeature.properties?.title.match(/>(.*?)</)[1],
    );
  } while (playedSongs.has(randomSongName));
  updatePlayedSongs(randomSongName!);
  return randomSongName!.trim();
};

//this is extremely useful for testing
export const getRandomSongByTitle = (songName: string) => {
  const matchedFeature = geojsondata.features.find(feature => {
    const featureTitle = feature.properties?.title;
    if (!featureTitle) return false;

    const match = featureTitle.match(/>(.*?)</);
    if (!match) return false;

    const decodedTitle = decodeHTML(match[1]);
    return decodedTitle === songName;
  });

  if (!matchedFeature) return null;

  const rawTitle = matchedFeature.properties!.title;
  const match = rawTitle.match(/>(.*?)</);
  const randomSongName = decodeHTML(match![1]);

  return randomSongName?.trim();
};


const updatePlayedSongs = (newSongName: string) => {
  playedSongsOrder.push(newSongName);

  // If limit is reached, remove the oldest song
  if (playedSongsOrder.length > 100) {
    //change val based on how many songs should be shown without dupes
    const oldestSong = playedSongsOrder.shift();
    playedSongs.delete(oldestSong);
  }

  playedSongs.add(newSongName);
};
