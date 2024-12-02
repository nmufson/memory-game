import styles from './Card.module.css';
import { Character } from '../../types';
import { useState } from 'react';

interface CardProps {
  character: Character;
  onClick: () => void;
  isBlurred: boolean;
}

const Card = ({ character, onClick, isBlurred }: CardProps) => {
  return (
    <>
      <div
        className={`card ${styles.card} ${
          isBlurred ? `${styles.blur} ${styles.shuffle}` : ''
        }`}
        onClick={onClick}
      >
        <img
          src={character.imageURL}
          alt=""
          className={styles.characterImage}
        />
        <div className={styles.nameContainer}>
          <p>{character.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
