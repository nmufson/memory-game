import { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ winStatus, score, onClose }) => {
  const [title, setTitle] = useState(null);

  if (winStatus === 'win') {
    setTitle('You Win!');
  } else {
    setTitle('You Lose');
  }
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal} onClick={onClose}>
        <h2>{title}</h2>
        <p>Score: {score}</p>
        <p>Would you like to play again?</p>
        <div className={styles.buttonGroup}>
          <button onClick={handleReturnHome}>Return Home</button>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      </div>
    </>
  );
};
