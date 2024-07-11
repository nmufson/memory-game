import { useEffect, useState } from 'react';
import styles from './Card.module.css';

export const CardComponent = ({ pokemonId, onClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const randomId = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []); // runs once the component mounts

  // need this or CardComponent will try to return the img before we've
  // retrieved our data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <img src={data.sprites.front_default} alt="" />
        <p>
          {data.name[0].toUpperCase()}
          {data.name.slice(1)}
        </p>
      </div>
    </>
  );
};
