import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CardComponent } from './components/Card/Card';
import { HeaderComponent } from './components/Header/Header';

export function App() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // destructing to reassign array elements
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [arr, setArr] = useState([
    3, 7, 11, 15, 20, 25, 30, 35, 40, 45, 50, 55,
  ]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clickPokemon = (pokemonId) => {
    if (selectedIds.includes(pokemonId)) {
      setScore(0);
      setSelectedIds([]);
    } else {
      setScore(score + 1);
      setSelectedIds([...selectedIds, pokemonId]);
      setBestScore(Math.max(bestScore, score + 1));
    }
    setArr(shuffleArray(arr));
  };

  return (
    <>
      <HeaderComponent score={score} bestScore={bestScore}></HeaderComponent>
      <main>
        {arr.map((value) => (
          <CardComponent
            key={value}
            pokemonId={value}
            onClick={() => clickPokemon(value)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
