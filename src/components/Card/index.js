import "./styles.css";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Item from "./Item";
import CardSkeleton from "./CardSkeleton";

function Card({ weatherData }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const currentDate = dayjs(new Date());
    const formattedDate = currentDate.format("dddd, DD [de] MMMM [de] YYYY");
    setDate(formattedDate);
  }, [weatherData]);

  return (
    <div className="card">
      {weatherData
        ? (
          <>
            <div className="card-header">
              <div>
                <strong>
                  {date}
                  .
                </strong>
                <h2>{weatherData.region}</h2>
              </div>
              <div>
                <h1>
                  {weatherData.temp}
                  º
                </h1>
                <strong>Temperatura</strong>
              </div>
            </div>
            <div className="card-body">
              <div className="card-body-item left">
                <Item className="card-body-item" title="Região" value={weatherData.region} />
                <Item className="card-body-item" title="Temp. Mínima" value={`${weatherData.tempMin} º`} />
                <Item className="card-body-item" title="Temp. Máxima" value={`${weatherData.tempMax} º`} />
                <Item className="card-body-item" title="Umidade" value={`${weatherData.humidity} %`} />
              </div>
              <div className="card-body-item right">
                <img src={`http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`} alt="icon" />
                <strong>{weatherData.weatherTitle}</strong>
                <strong>{weatherData.weatherDescription}</strong>
              </div>
            </div>
          </>
        )
        : <CardSkeleton />}
    </div>
  );
}

Card.propTypes = {
  weatherData: PropTypes.shape({
    region: PropTypes.string,
    weatherTitle: PropTypes.string,
    weatherDescription: PropTypes.string,
    weatherIcon: PropTypes.string,
    temp: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    humidity: PropTypes.number,
  }),

};

Card.defaultProps = {
  weatherData: PropTypes.shape({
    region: "",
    weatherTitle: "",
    weatherDescription: "",
    weatherIcon: "",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
  }),
};

export default Card;
