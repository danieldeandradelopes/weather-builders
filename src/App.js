import "./App.css";
import { useEffect, useState } from "react";
import weatherAPI from "./services/weather";

function App() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    if (coords) {
      const { latitude, longitude } = coords;
      handleRequestToApi(latitude, longitude);
    }
  }, [coords]);

  function getCoordinates() {
    navigator.geolocation.getCurrentPosition((localization) => {
      const { coords: { latitude, longitude } } = localization;
      setCoords({ latitude, longitude });
    });
  }

  async function handleRequestToApi(latitude, longitude) {
    const { data } = await weatherAPI.get(`weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`);
    setWeather(data);
  }

  async function handleUpdateWeather() {
    setWeather("");
    getCoordinates();
  }

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <div>
        {weather && weather.weather[0].main}
      </div>
      <button onClick={() => handleUpdateWeather()}>
        Test
      </button>
    </div>
  );
}

export default App;
