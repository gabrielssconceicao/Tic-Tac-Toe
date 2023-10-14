import P from 'prop-types';
import './style.css';
export const Score = ({ children, points, ...props }) => {
  return (
    <div className="score" style={props}>
      <h1>{children}</h1>
      <h2>{points}</h2>
    </div>
  );
};

Score.propTypes = {
  children: P.string.isRequired,
  points: P.number.isRequired,
};
