import { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { GameParams } from '../../types';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import setTheme from '../../utils/setTheme';

interface ModalProps {
  win: boolean;
  prevScore: number;
  highScore: number;
  handlePlayAgain: () => void;
}

const Modal = ({ win, prevScore, highScore, handlePlayAgain }: ModalProps) => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(win ? 'You Win!' : 'You Lose');
  }, [win]);

  const navigate = useNavigate();

  const handleReturnHome = () => {
    setTheme('base');
    navigate('/home');
  };

  return (
    <>
      <div className={styles.backdrop} />
      <div className={`modal ${styles.modal}`}>
        <h2>{title}</h2>
        <div className={styles.scoreContainer}>
          <p>Score: {prevScore}</p>
          <p>|</p>
          <p>High Score: {highScore}</p>
        </div>

        <p>Would you like to play again?</p>
        <div className={styles.buttonGroup}>
          <button
            onClick={handleReturnHome}
            className={`return-home ${styles.modalButton}`}
          >
            Return Home
          </button>
          <button
            onClick={handlePlayAgain}
            className={`play-again ${styles.modalButton}`}
          >
            {' '}
            Play Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
