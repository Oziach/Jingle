import { ASSETS } from '../../constants/assets';
import '../../style/modal.css';
import { GameState } from '../../types/jingle';
import Modal from '../Modal';
import IconButton from './IconButton';

interface StatsModalButtonProps {
  onClick: () => void;
  open: boolean;
  onClose: () => void;
}

export default function StatsModalButton({
  onClick,
  open,
  onClose,
}: StatsModalButtonProps) {
  const localStorageKeys = Object.keys(localStorage);
  const gameStateKeys = localStorageKeys.filter((key) =>
    key.includes('jingle-'),
  );
  const gameStateObjects = gameStateKeys.map((key) => {
    const gameState: GameState | null = JSON.parse(
      localStorage.getItem(key) ?? '{}',
    );
    // todo: retrieve stats from local storage gamestate
  });
  return (
    <>
      <IconButton
        onClick={onClick}
        img={ASSETS['stats']}
      />
      <Modal
        open={open}
        onClose={onClose}
      >
        <h2>Personal Statistics</h2>
        <div className='modal-line'>
          <span>Games Played</span>
          <span>100</span>
        </div>
        <div className='modal-line'>
          <span>Success Rate</span>
          <span>19.37%</span>
        </div>
        <h2>Global Statistics</h2>
        <div className='modal-line'>
          <span>Total Guesses</span>
          <span>1,347,537</span>
        </div>
        <div className='modal-line'>
          <span>Success Rate</span>
          <span>4.37%</span>
        </div>
      </Modal>
    </>
  );
}
