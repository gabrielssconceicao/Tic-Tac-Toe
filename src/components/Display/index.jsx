import P from 'prop-types';
import './style.css';
import restart from '../../images/restart.svg';
export const Display = ({ turn, resetFunc }) => {
  return (
    <section className="display">
      <div className="turn">
        Turn:
        <span className={turn}>{turn == 'player' ? 'X' : 'O'}</span>
      </div>

      <button className="reset-btn" onClick={resetFunc}>
        <img src={restart} alt="reset" />
      </button>
    </section>
  );
};
Display.propTypes = {
  turn: P.string.isRequired,
  resetFunc: P.func.isRequired,
};
