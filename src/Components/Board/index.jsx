import React, { useEffect, useState } from 'react';
import { Square } from '../Square';
import './Board.css';

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('');
  const [winner, setWinner] = useState({ win: false, player: '' });

  const togglePlayer = () => setPlayer((prev) => (prev === 'X' ? 'O' : 'X'));

  const randPlayer = () => {
    const random = Math.floor(Math.random() * 2);

    setPlayer(random === 0 ? 'X' : 'O');
  };

  const checkWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        setWinner({ win: true, player });
        return;
      }
    }
    if (square.every((el) => el !== null)) {
      setWinner({ win: '', player: '' });
    }
  };

  const handleClick = (id) => {
    const newSquares = [...squares];

    if (newSquares[id] || winner.win) return;

    newSquares[id] = player;
    setSquares(newSquares);
    checkWinner(newSquares);
    if (!winner.win) {
      togglePlayer();
    }
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    randPlayer();
    setWinner({ win: false, player: '' });
  };

  useEffect(() => {
    randPlayer();
  }, []);

  return (
    <div className="board">
      <div className="squares">
        {squares.map((el, index) => (
          <Square key={index} onClick={() => handleClick(index)} value={el} />
        ))}
      </div>

      <div className="score">
        {winner.win ? (
          <>
            <h3>O vencedor é: {winner.player}</h3>
            <button onClick={reset} type="button">
              Jogar de novo
            </button>
          </>
        ) : (
          <h3>É a vez de: {player}</h3>
        )}
        {winner.win === '' && (
          <>
            <h3>Velha</h3>
            <button onClick={reset} type="button">
              Jogar de novo
            </button>
          </>
        )}
      </div>
    </div>
  );
}
