import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CardComponent } from './components/Card/Card';
import { HeaderComponent } from './components/Header/Header';

export function App() {
  const arr = [];
  for (let i = 1; i < 13; i++) {
    arr.push(i * 3);
  }

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
      setBestScore(Math.max(bestScore, score));
    }
  };

  return (
    <>
      <HeaderComponent score={score} bestScore={bestScore}></HeaderComponent>
      <main>
        {arr.map((value, index) => (
          <CardComponent
            key={index}
            pokemonId={value}
            onClick={() => clickPokemon(value)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
