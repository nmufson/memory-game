import setTheme from '../../utils/setTheme';
import './Header.module.css';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    setTheme('base');
    navigate('/home');
  };
  return (
    <>
      <header className={styles.header}>
        <div className={`header-container ${styles.headerContainer} `}>
          <p className={`logo ${styles.logo}`} onClick={returnHome}>
            Memory Game
          </p>

          <button
            onClick={returnHome}
            className={`homeButton ${styles.homeButton}`}
          >
            Home
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
