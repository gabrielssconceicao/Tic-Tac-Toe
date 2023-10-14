import P from 'prop-types';
import './style.css';
export const Board = ({ children }) => {
  return <section className="board">{children}</section>;
};
Board.propTypes = {
  children: P.arrayOf(P.node).isRequired,
};
