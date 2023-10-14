import { useCallback, useState } from 'react';
import { Board } from './components/Board';
import { Square } from './components/Square';
import { Scores } from './components/Scores';
import { Display } from './components/Display';

export default function App() {
  const [squares, setSquares] = useState(
    new Array(9).fill({ value: '', playerTurn: '' })
  );
  const [turn, setTurn] = useState(Math.floor(Math.random() * 2));

  const squareClick = useCallback((index) => {
    const newSquares = squares.map((square, i) => {
      if (i === index && square.value === '') {
        return {
          ...square,
          value: turn === 0 ? 'X' : 'O',
          playerTurn: turn === 0 ? 'player' : 'opponent',
        };
      }
      return square;
    });
    console.log(newSquares);
    setSquares(newSquares);
    setTurn(turn === 0 ? 1 : 0);
  });

  const resetGame = useCallback(() => {
    setSquares(new Array(9).fill({ value: '', playerTurn: '' }));
  });
  return (
    <>
      <Display turn={turn} resetFunc={resetGame} />
      <Board>
        {squares.map((square, i) => (
          <Square key={i} handleClick={() => squareClick(i)}>
            {square}
          </Square>
        ))}
      </Board>
      <Scores />
    </>
  );
}
