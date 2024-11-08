import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home/',
        element: <Home />,
      },
      {
        path: 'play/',
        element: <Game />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// export function App() {
//   const [arr, setArr] = useState([
//     3, 7, 11, 15, 20, 25, 30, 35, 40, 45, 50, 55,
//   ]);
//   const [selectedIds, setSelectedIds] = useState([]);
//   const [score, setScore] = useState(0);
//   const [bestScore, setBestScore] = useState(0);

//   const clickPokemon = (pokemonId) => {
//     if (selectedIds.includes(pokemonId)) {
//       setScore(0);
//       setSelectedIds([]);
//     } else {
//       setScore(score + 1);
//       setSelectedIds([...selectedIds, pokemonId]);
//       setBestScore(Math.max(bestScore, score + 1));
//     }
//     setArr(shuffleArray(arr));
//   };

//   return (
//     <>
//       <HeaderComponent score={score} bestScore={bestScore}></HeaderComponent>
//       <main>
//         {arr.map((value) => (
//           <CardComponent
//             key={value}
//             pokemonId={value}
//             onClick={() => clickPokemon(value)}
//           />
//         ))}
//       </main>
//       <CardList></CardList>
//     </>
//   );
// }
