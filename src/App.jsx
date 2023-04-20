import { useState } from 'react';
import './App.css';
import {Board} from './Components/Board';

export default function App() {
  const [player, setPlayer] = useState('X');

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>

      <Board />
    </div>
  );
}
