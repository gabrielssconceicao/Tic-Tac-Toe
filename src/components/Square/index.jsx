import P from 'prop-types';
import './style.css';
export const Square = ({ children }) => {
  return <div className="square">{children}</div>;
};
Square.propTypes = {
  children: P.number.isRequired,
};
