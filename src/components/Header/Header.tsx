import './Header.module.css';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <p>Memory Game</p>

        <Link to="/home">Home</Link>
      </header>
    </>
  );
};

export default Header;
