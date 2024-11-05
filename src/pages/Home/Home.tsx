import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [gameInfo, setGameInfo] = useState({
    showId: null,
    numOfCards: null,
  });

  const handleShowClick = (showId) => {
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      showId: showId,
    }));
  };

  const handleSkillClick = (numOfCards) => {
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      numOfCards: numOfCards,
    }));
  };

  const isPlayEnabled = gameInfo.showId && gameInfo.numOfCards;

  return (
    <div className={styles.home}>
      <div className={styles.showContainer}>
        <h1>Choose a Series</h1>
        <div className={styles.linkContainer}>
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/the-wire-title-logo-slice.jpg"
            alt="The Wire"
            onClick={() => handleShowClick(shows[0].showId)}
          />

          {/* <Link to="/play" state={{ showId: shows[1].showId }}>
            <img
              src="https://www.artofthetitle.com/assets/sm/upload/3c/yw/kr/gx/sopranos_logo-updated.jpg?k=88c55f4205"
              alt=""
            />
          </Link> */}

          <img
            src="https://assets.fontsinuse.com/use-media/52603/upto-700xauto/5927e8cf/1/png/vlcsnap-2017-05-26-10h31m11s324.png"
            alt="Twin Peaks"
            onClick={() => handleShowClick(shows[2].showId)}
          />
        </div>
      </div>
      <div className={styles.skillContainer}>
        <h1>Choose a Skill Level</h1>
        <div className={styles.buttonContainer}>
          <button onClick={() => handleSkillClick(10)}>Easy</button>
          <button onClick={() => handleSkillClick(18)}>Medium</button>
          <button onClick={() => handleSkillClick(26)}>Hard</button>
        </div>
      </div>
      <Link to="/play" state={{ gameInfo }}>
        <h2 className={styles.play}>PLAY</h2>
      </Link>
    </div>
  );
};

const shows = [
  {
    name: 'The Wire',
    showId: 179,
  },
  {
    name: 'The Sopranos',
    showId: 527,
  },
  {
    name: 'Twin Peaks',
    showId: 156,
  },
];

export default Home;
