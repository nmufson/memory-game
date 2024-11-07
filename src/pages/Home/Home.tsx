import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { shows, Show } from './showData.ts';
import ShowImage from '../../components/ShowImage/ShowImage';
import SkillButton from '../../components/SkillButton/SkillButton';
import { GameParams } from '../../types.ts';
import setTheme from '../../utils/setTheme.ts';

const Home = () => {
  const [gameParams, setGameParams] = useState<GameParams>({
    showId: null,
    numOfCards: null,
  });

  const skillLevels = {
    easy: 15,
    medium: 25,
    hard: 35,
  };

  const handleShowClick = (show: Show) => {
    setGameParams((prevParams) => ({
      ...prevParams,
      showId: show.id,
    }));

    setTheme(show.theme);
  };

  const handleSkillClick = (numOfCards: number) => {
    setGameParams((prevParams) => ({
      ...prevParams,
      numOfCards: numOfCards,
    }));
  };

  const isPlayEnabled = Boolean(gameParams.showId && gameParams.numOfCards);

  return (
    <div className={styles.home}>
      <div className={styles.showContainer}>
        <h1>Choose a Series</h1>
        <div className={styles.linkContainer}>
          {shows.map((show) => (
            <ShowImage
              key={show.id}
              src={show.imageURL}
              alt={show.name}
              isSelected={gameParams.showId === show.id}
              onClick={() => handleShowClick(show)}
            ></ShowImage>
          ))}
        </div>
      </div>
      <div className={styles.skillContainer}>
        <h1>Choose a Skill Level</h1>
        <div className={`homeButtonContainer ${styles.buttonContainer}`}>
          <SkillButton
            label="Easy"
            isSelected={gameParams.numOfCards === skillLevels.easy}
            onClick={() => handleSkillClick(skillLevels.easy)}
          />
          <SkillButton
            label="Medium"
            isSelected={gameParams.numOfCards === skillLevels.medium}
            onClick={() => handleSkillClick(skillLevels.medium)}
          />
          <SkillButton
            label="Hard"
            isSelected={gameParams.numOfCards === skillLevels.hard}
            onClick={() => handleSkillClick(skillLevels.hard)}
          />
        </div>
      </div>
      <Link
        to="/play"
        state={{ gameParams }}
        className={`${styles.play} play ${isPlayEnabled ? '' : styles.disabled}`}
      >
        PLAY
      </Link>
    </div>
  );
};

export default Home;
