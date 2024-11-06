import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characterService';
import shuffle from '../../utils/shuffle';
import styles from './Game.module.css';
import { Character } from '../../types';
import { useLocation } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

interface modalInfo {
  isModalOpen: boolean;
  win: boolean;
}

interface gameInfo {
  selectedCardIds: number[];
  currentScore: number;
  highScore: number;
}

const Game = () => {
  const [gameInfo, setGameInfo] = useState<gameInfo>({
    selectedCardIds: [],
    currentScore: 0,
    highScore: 0,
  });
  const [characterData, setCharacterData] = useState<Character[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [modalInfo, setModalInfo] = useState<modalInfo>({
    isModalOpen: false,
    win: false,
    prevScore: 0,
  });

  const location = useLocation();

  const gameParams = location.state?.gameParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters(
          gameParams.showId,
          gameParams.numOfCards
        );
        const shuffledData = shuffle(data);
        setCharacterData(shuffledData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const clickCard = (characterId: number) => {
    if (gameInfo.selectedCardIds.includes(characterId)) {
      console.log(gameInfo.currentScore);
      setModalInfo({
        isModalOpen: true,
        win: false,
        prevScore: gameInfo.currentScore,
      });

      restartGame();
    } else {
      setGameInfo((prevGameInfo) => {
        const newScore = prevGameInfo.currentScore + 1;
        return {
          ...prevGameInfo,
          currentScore: newScore,
          selectedCardIds: [...prevGameInfo.selectedCardIds, characterId],
          highScore: Math.max(prevGameInfo.highScore, newScore),
        };
      });

      if (gameInfo.currentScore + 1 === gameParams.numOfCards) {
        setModalInfo({
          isModalOpen: true,
          win: true,
          prevScore: gameInfo.currentScore + 1,
        });
      }

      const shuffledData = shuffle(characterData);
      setCharacterData(shuffledData);
    }
  };

  const restartGame = () => {
    setGameInfo((prev) => ({
      ...prev,
      currentScore: 0,
      selectedCardIds: [],
    }));
  };

  const handlePlayAgain = () => {
    restartGame();

    setModalInfo((prevInfo) => ({
      ...prevInfo,
      isModalOpen: false,
    }));
    const shuffledData = shuffle(characterData);
    setCharacterData(shuffledData);
  };

  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className={styles.gameContainer}>
        <h1>
          Earn points by clicking on an image. Points reset if you click on the
          same image twice!
        </h1>
        <div className={`scoreContainer ${styles.scoreContainer}`}>
          <p>Score: {gameInfo.currentScore || 0}</p>
          <p>Best Score: {gameInfo.highScore || 0}</p>
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
      {modalInfo.isModalOpen && (
        <Modal
          win={modalInfo.win}
          prevScore={modalInfo.prevScore}
          highScore={gameInfo.highScore}
          handlePlayAgain={handlePlayAgain}
        ></Modal>
      )}
    </>
  );
};

export default Game;
