import { Score } from './Score';
import './style.css';
export const Scores = () => {
  const scoresBgs = {
    win: {
      background: '#4e7d5d',
      'border-radius': '10px',
      'box-shadow': '-5px 5px 2px #385a40',
    },
    draw: {
      background: '#e27841',
      'border-radius': '10px',
      'box-shadow': '-5px 5px 2px #b25528',
    },
    lose: {
      background: '#6b238d',
      'border-radius': '10px',
      'box-shadow': '-5px 5px 2px #4c1a63',
    },
  };
  return (
    <section className="scores">
      <Score points={0} {...scoresBgs.win}>
        Win
      </Score>
      <Score points={0} {...scoresBgs.draw}>
        Draw
      </Score>
      <Score points={0} {...scoresBgs.lose}>
        Lose
      </Score>
    </section>
  );
};
Scores.propTypes = {};
