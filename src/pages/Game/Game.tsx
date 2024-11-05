import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characterService';
import shuffle from '../../utils/shuffle';
import styles from './Game.module.css';
import { Character } from '../../types';
import { useLocation } from 'react-router-dom';

const Game = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const location = useLocation();
  const showId = location.state?.showId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters(156, 20);
        const shuffledData = shuffle(data);
        setCharacterData(shuffledData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const clickCard = (characterId: number) => {
    if (selectedIds.includes(characterId)) {
      setScore(0);
      setSelectedIds([]);
    } else {
      setScore(score + 1);
      setSelectedIds([...selectedIds, characterId]);
      setBestScore(Math.max(bestScore, score + 1));
    }
    const shuffledData = shuffle(characterData);
    setCharacterData(shuffledData);
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreContainer}>
        <p>
          Earn points by clicking on an image. Points reset if you click on the
          same image twice!
        </p>
        <p>Score: {score || 0}</p>
        <p>Best Score: {bestScore || 0}</p>
      </div>
      <div className={styles.cards}>
        {characterData.map((character) => (
          <Card
            key={character.id}
            character={character}
            onClick={() => clickCard(character.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
