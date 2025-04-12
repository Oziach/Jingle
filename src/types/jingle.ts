import { Feature, GeoJsonObject, Polygon } from 'geojson';
import { LatLng } from 'leaflet';
import { Region } from '../constants/regions';

export enum Screen {
  MainMenu = 'main-menu',
  DailyJingle = 'daily-jingle',
  Practice = 'practice',
}

export enum GameStatus {
  Guessing = 'guessing',
  AnswerRevealed = 'answer-revealed',
  GameOver = 'game-over',
}

export enum ModalType {
  Stats = 'stats',
  News = 'news',
  Settings = 'settings',
}
export interface GameState {
  settings: GameSettings;
  status: GameStatus;
  round: number; // 0-4
  songs: string[];
  scores: number[];
  startTime: number;
  timeTaken: string | null;

  guess: Guess | null;
}
export interface Guess {
  correct: boolean;
  distance: number;
  guessedPosition: {mapId:number, position: L.LatLng | null;}
  correctPolygons: {mapId:number, polygons: GeoJsonObject[] | null;}
}

export interface GameSettings {
  hardMode: boolean;
  oldAudio: boolean;
}

export interface PersonalStats {
  correctGuesses: number;
  incorrectGuesses: number;
  maxStreak: number;
  currentStreak: number;
}
export interface DailyChallenge {
  date: string; // YYYY-MM-DD
  songs: string[];
  submissions: number;
  results: number[];
}

export interface Statistics {
  guesses: number;
}

export interface UserPreferences {
  preferHardMode: boolean;
  preferOldAudio: boolean;
  preferConfirmation: boolean;
  regions: Record<Region, boolean>;
}

export interface Song {
  name: string;
  successRate: number;
  successCount: number;
  failureCount: number;
}
