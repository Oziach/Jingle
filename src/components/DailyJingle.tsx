import { sum } from 'ramda';
import { useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';
import { ASSETS } from '../constants/assets';
import {
  incrementGlobalGuessCounter,
  incrementSongFailureCount,
  incrementSongSuccessCount,
  postDailyChallengeResult,
} from '../data/jingle-api';
import { keys } from '../data/localstorage';
import useGameLogic, { Guess } from '../hooks/useGameLogic';
import '../style/uiBox.css';
import {
  DailyChallenge,
  GameState,
  GameStatus,
  ModalType,
} from '../types/jingle';
import { getCurrentDateInBritain } from '../utils/date-utils';
import { copyResultsToClipboard, getJingleNumber } from '../utils/jingle-utils';
import { playSong } from '../utils/playSong';
import DailyGuessLabel from './DailyGuessLabel';
import Footer from './Footer';
import GameOver from './GameOver';
import RoundResult from './RoundResult';
import RunescapeMap from './RunescapeMap';
import HomeButton from './buttons/HomeButton';
import NewsModalButton from './buttons/NewsModalButton';
import SettingsModalButton from './buttons/SettingsModalButton';
import StatsModalButton from './buttons/StatsModalButton';

interface DailyJingleProps {
  dailyChallenge: DailyChallenge;
}
export default function DailyJingle({ dailyChallenge }: DailyJingleProps) {
  const jingleNumber = getJingleNumber(dailyChallenge);
  const loadGameState = (): GameState | null => {
    const gameStateJson = localStorage.getItem(keys.gameState(jingleNumber));
    try {
      const gameState = JSON.parse(gameStateJson ?? 'null');
      return gameState;
    } catch (e) {
      console.error('Failed to parse saved game state: ' + gameState);
      return null;
    }
  };

  const [openModalId, setOpenModalId] = useState<ModalType | null>(null);
  const handleModalClick = (id: ModalType) => {
    if (openModalId === id) setOpenModalId(null);
    else setOpenModalId(id);
  };

  const closeModal = () => setOpenModalId(null);
  const saveGameState = (gameState: GameState) => {
    localStorage.setItem(
      keys.gameState(jingleNumber),
      JSON.stringify(gameState),
    );
  };
  const incrementLocalGuessCount = (correct: boolean) => {
    const key = correct ? keys.correctGuesses : keys.incorrectGuesses;
    const currentCount = parseInt(localStorage.getItem(key) ?? '0');
    localStorage.setItem(key, (currentCount + 1).toString());
  };

  const jingle = useGameLogic(dailyChallenge, loadGameState());
  const gameState = jingle.gameState;

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    playSong(
      audioRef,
      gameState.songs[gameState.round],
      gameState.settings.oldAudio,
      gameState.settings.hardMode,
    );
  }, []);

  const guess = (guess: Guess) => {
    const gameState = jingle.guess(guess);
    saveGameState(gameState);

    // update statistics
    incrementGlobalGuessCounter();
    const currentSong = gameState.songs[gameState.round];
    if (guess.correct) {
      incrementLocalGuessCount(true);
      incrementSongSuccessCount(currentSong);
    } else {
      incrementLocalGuessCount(false);
      incrementSongFailureCount(currentSong);
    }

    const isLastRound = gameState.round === gameState.songs.length - 1;
    if (isLastRound) {
      // submit daily challenge
      localStorage.setItem(keys.dailyComplete, getCurrentDateInBritain());
      postDailyChallengeResult(sum(gameState.scores));
    }
  };

  const endGame = () => {
    const gameState = jingle.endGame();
    saveGameState(gameState);
  };

  const nextSong = () => {
    const gameState = jingle.nextSong();
    saveGameState(gameState);

    const songName = gameState.songs[gameState.round];
    playSong(
      audioRef,
      songName,
      gameState.settings.oldAudio,
      gameState.settings.hardMode,
    );
  };

  const button = (label: string, onClick?: () => any) => (
    <div
      className='guess-btn-container'
      onClick={onClick}
      style={{ pointerEvents: onClick ? 'auto' : 'none' }}
    >
      <img
        src={ASSETS['labelWide']}
        alt='OSRS Button'
      />
      <div className='guess-btn'>{label}</div>
    </div>
  );

  return (
    <>
      <div className='App-inner'>
        <div className='ui-box'>
          <HomeButton />
          <SettingsModalButton
            open={openModalId === ModalType.Settings}
            onClose={closeModal}
            onClick={() => handleModalClick(ModalType.Settings)}
            currentSettings={undefined}
            onApplySettings={() => {}}
          />
          <NewsModalButton
            open={openModalId === ModalType.News}
            onClose={closeModal}
            onClick={() => handleModalClick(ModalType.News)}
          />
          <StatsModalButton
            open={openModalId === ModalType.Stats}
            onClose={closeModal}
            onClick={() => handleModalClick(ModalType.Stats)}
          />
          <div className='below-map'>
            <div style={{ display: 'flex', gap: '2px' }}>
              <DailyGuessLabel number={gameState.scores[0]} />
              <DailyGuessLabel number={gameState.scores[1]} />
              <DailyGuessLabel number={gameState.scores[2]} />
              <DailyGuessLabel number={gameState.scores[3]} />
              <DailyGuessLabel number={gameState.scores[4]} />
            </div>

            {match(gameState.status)
              .with(GameStatus.Guessing, () =>
                button('Place your pin on the map'),
              )
              .with(GameStatus.AnswerRevealed, () => {
                if (gameState.round < gameState.songs.length - 1) {
                  return button('Next Song', nextSong);
                } else {
                  return button('End Game', endGame);
                }
              })
              .with(GameStatus.GameOver, () =>
                button('Copy Results', () => copyResultsToClipboard(gameState)),
              )
              .exhaustive()}

            <audio
              controls
              id='audio'
              ref={audioRef}
            />

            <Footer />
          </div>
        </div>
      </div>

      <RunescapeMap
        gameState={gameState}
        onGuess={guess}
      />

      <RoundResult gameState={gameState} />

      {gameState.status === GameStatus.GameOver && (
        <GameOver
          gameState={gameState}
          dailyChallenge={dailyChallenge}
        />
      )}
    </>
  );
}
