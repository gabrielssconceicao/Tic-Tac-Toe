import P from 'prop-types';
import { Score } from './Score';
import './style.css';
export const Scores = ({ score }) => {
  const scoresBgs = {
    win: {
      background: '#4e7d5d',
      borderRadius: '10px',
      boxShadow: '-5px 5px 2px #385a40',
    },
    draw: {
      background: '#e27841',
      borderRadius: '10px',
      boxShadow: '-5px 5px 2px #b25528',
    },
    lose: {
      background: '#6b238d',
      borderRadius: '10px',
      boxShadow: '-5px 5px 2px #4c1a63',
    },
  };
  return (
    <section className="scores">
      <Score points={score.player} {...scoresBgs.win}>
        Win(X)
      </Score>
      <Score points={score.draw} {...scoresBgs.draw}>
        Draw
      </Score>
      <Score points={score.opponent} {...scoresBgs.lose}>
        Lose(O)
      </Score>
    </section>
  );
};
Scores.propTypes = {
  score: P.shape({
    player: P.number.isRequired,
    opponent: P.number.isRequired,
    draw: P.number.isRequired,
  }).isRequired,
};
