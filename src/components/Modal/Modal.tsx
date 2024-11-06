import { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { GameParams } from '../../types';
import { Link } from 'react-router-dom';

interface ModalProps {
  win: boolean;
  prevScore: number;
  handlePlayAgain: () => void;
}

const Modal = ({ win, prevScore, highScore, handlePlayAgain }: ModalProps) => {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(win ? 'You Win!' : 'You Lose');
  }, [win]);

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h2>{title}</h2>
        <p>Score: {prevScore}</p>
        <p>High Score: {highScore}</p>
        <p>Would you like to play again?</p>
        <div className={styles.linkGroup}>
          <Link to="/home">Return Home</Link>
          <button onClick={handlePlayAgain}> Play Again</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
