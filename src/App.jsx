import { useCallback } from 'react';
import { Board } from './components/Board';
import { Square } from './components/Square';
import { Scores } from './components/Scores';
import { Display } from './components/Display';

export default function App() {
  const renderSquares = useCallback(() => {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(<Square key={i}>{i}</Square>);
    }
    return squares;
  }, []);
  return (
    <>
      <Display />
      <Board>{renderSquares()}</Board>
      <Scores />
    </>
  );
}
