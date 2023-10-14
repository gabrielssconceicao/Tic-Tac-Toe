import './style.css';
import restart from '../../images/restart.svg';
export const Display = () => {
  return (
    <section className="display">
      <div className="turn">
        Turn: <span>X</span>
      </div>

      <button className="reset-btn">
        <img src={restart} alt="reset" />
      </button>
    </section>
  );
};
Display.propTypes = {};
