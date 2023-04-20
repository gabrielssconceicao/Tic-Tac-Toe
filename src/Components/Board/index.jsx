import React, { useEffect, useState } from 'react';
import { Square } from '../Square';
import './Board.css';

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('');
  const togglePlayer = () => {
    setPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  const handleClick = (id) => {
    const newSquares = [...squares];

    if (newSquares[id]) return;

    newSquares[id] = player;
    setSquares(newSquares);
    togglePlayer();
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 2);

    setPlayer(random === 0 ? 'X' : 'O');
  }, []);

  return (
    <div className="board">
      <div className="squares">
        {squares.map((el, index) => (
          <Square key={index} onClick={() => handleClick(index)} value={el} />
        ))}
      </div>

      <h3>
        É a vez de: <span>{player}</span>
      </h3>
    </div>
  );
}
