import styles from './Card.module.css';
import { Character } from '../../types';

interface CardProps {
  character: Character;
  onClick: () => void;
}

const Card = ({ character, onClick }: CardProps) => {
  return (
    <>
      <div className={`card ${styles.card}`} onClick={onClick}>
        <img src={character.imageURL} alt="" />
        <div className={styles.nameContainer}>
          <p>{character.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
