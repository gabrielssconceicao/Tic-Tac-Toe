import P from 'prop-types';
import './style.css';
export const Square = ({ children, handleClick }) => {
  return (
    <div className="square" onClick={handleClick}>
      <span className={children.playerTurn}>{children.value}</span>
    </div>
  );
};
Square.propTypes = {
  children: P.shape({
    value: P.string.isRequired,
    playerTurn: P.string.isRequired,
  }).isRequired,
  handleClick: P.func.isRequired,
};
