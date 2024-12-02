import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characterService';
import shuffle from '../../utils/shuffle';
import styles from './Game.module.css';
import { Character } from '../../types';
import { useLocation } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import setTheme from '../../utils/setTheme';

interface modalInfo {
  isModalOpen: boolean;
  win: boolean;
  prevScore: number;
}

interface gameInfo {
  selectedCardIds: number[];
  currentScore: number;
  highScore: number;
}

const Game = () => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const [gameInfo, setGameInfo] = useState<gameInfo>({
    selectedCardIds: [],
    currentScore: 0,
    highScore: 0,
  });
  const [modalInfo, setModalInfo] = useState<modalInfo>({
    isModalOpen: false,
    win: false,
    prevScore: 0,
  });

  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const location = useLocation();

  const gameParams = location.state?.gameParams;
  setTheme(gameParams.theme);

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

      setIsBlurred(true);

      setTimeout(() => {
        const shuffledData = shuffle(characterData);
        setCharacterData(shuffledData);
        setIsBlurred(false);
      }, 300);
    }
  };

  const restartGame = () => {
    setGameInfo((prev) => ({
      ...prev,
      currentScore: 0,
      selectedCardIds: [],
    }));

    const shuffledData = shuffle(characterData);
    setCharacterData(shuffledData);
  };

  const handlePlayAgain = () => {
    setModalInfo((prevInfo) => ({
      ...prevInfo,
      isModalOpen: false,
    }));

    restartGame();
  };

  if (loading) return <p>loading...</p>;

  return (
    <>
      {/* <img
        className={styles.background}
        src="./images/breaking-bad.webp"
        alt=""
      /> */}
      <div className={styles.gameContainer}>
        <h1>
          Earn a point for each character selected. Pick the same character
          twice, and you lose!
        </h1>
        <div className={`scoreContainer ${styles.scoreContainer}`}>
          <div className={styles.currentScore}>
            <p>Score:</p>
            <p> {gameInfo.currentScore || 0}</p>
          </div>
          <div className={styles.highScore}>
            <p>High Score:</p>
            <p> {gameInfo.highScore || 0}</p>
          </div>
        </div>
        <div className={styles.cards}>
          {characterData.map((character) => (
            <Card
              key={character.id}
              character={character}
              isBlurred={isBlurred}
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
