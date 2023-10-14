import { useCallback } from 'react';
import { Board } from './components/Board';
import { Square } from './components/Square';
import { Scores } from './components/Scores';

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
      <section>Header</section>
      <Board>{renderSquares()}</Board>
      <Scores />
    </>
  );
}
