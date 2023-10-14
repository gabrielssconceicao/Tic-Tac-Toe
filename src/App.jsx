import { useCallback, useState } from 'react';
import { Board } from './components/Board';
import { Square } from './components/Square';
import { Scores } from './components/Scores';
import { Display } from './components/Display';

export default function App() {
  const [squares, setSquares] = useState(
    new Array(9).fill({ value: '', playerTurn: '' })
  );
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem('score')) || {
      player: 0,
      opponent: 0,
      draw: 0,
    }
  );
  const [turn, setTurn] = useState(Math.floor(Math.random() * 2));

  const resetGame = useCallback(
    (newScore, resetScore = false, hasWinner = false, winner = '') => {
      setSquares(new Array(9).fill({ value: '', playerTurn: '' }));
      if (resetScore) {
        setScore({
          player: 0,
          opponent: 0,
          draw: 0,
        });
        localStorage.setItem(
          'score',
          JSON.stringify({
            player: 0,
            opponent: 0,
            draw: 0,
          })
        );
        return;
      }
      localStorage.setItem('score', JSON.stringify(newScore));
      if (hasWinner && !resetScore) {
        const nextTurn = winner === 'player' ? 0 : 1;

        setTurn(nextTurn);
        return;
      }
      setTurn(Math.floor(Math.random() * 2));
      return;
    },
    []
  );

  const checkWinner = useCallback(
    (squares) => {
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
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a].value &&
          squares[a].value === squares[b].value &&
          squares[a].value === squares[c].value
        ) {
          const updatedScore = {
            ...score,
            [squares[a].playerTurn]: score[squares[a].playerTurn] + 1,
          };
          setScore(updatedScore);
          resetGame(updatedScore, false, true, squares[a].playerTurn);
          return;
        }
      }
      if (squares.every((square) => square.value !== '')) {
        const updatedScore = {
          ...score,
          draw: score.draw + 1,
        };
        setScore(updatedScore);
        resetGame(updatedScore, false);
        return;
      }
    },
    [score, resetGame]
  );

  const squareClick = useCallback(
    (index) => {
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
      setSquares(newSquares);
      setTurn(turn === 0 ? 1 : 0);
      checkWinner(newSquares);
    },
    [squares, turn, checkWinner]
  );

  return (
    <>
      <Display
        turn={turn == 0 ? 'player' : 'opponent'}
        resetFunc={() => resetGame(score, true)}
      />
      <Board>
        {squares.map((square, i) => (
          <Square key={i} handleClick={() => squareClick(i)}>
            {square}
          </Square>
        ))}
      </Board>
      <Scores score={score} />
    </>
  );
}
