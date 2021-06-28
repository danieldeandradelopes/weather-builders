import "./styles.css";
import PropTypes from "prop-types";

function Controls({ handleUpdateWeather }) {
  return (
    <div className="container-controls">
      <button onClick={() => handleUpdateWeather()}>
        Obter meu clima
      </button>
    </div>
  );
}

Controls.propTypes = {
  handleUpdateWeather: PropTypes.func,
};

Controls.defaultProps = {
  handleUpdateWeather: () => {},
};
export default Controls;
