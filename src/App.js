import "./App.css";
import { useEffect, useState } from "react";
import weatherAPI from "./services/weather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import Controls from "./components/Controls";

function App() {
  const [coords, setCoords] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

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
    try {
      setOpenAlert(false);
      const { data } = await weatherAPI.get(`weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric `);
      const { name, weather, main } = data;
      const { main: mainWeather, description, icon } = weather[0];
      const {
        temp, temp_min: tempMin, temp_max: tempMax, humidity,
      } = main;

      const weatherProperties = {
        region: name,
        weatherTitle: mainWeather,
        weatherDescription: description,
        weatherIcon: icon,
        temp,
        tempMin,
        tempMax,
        humidity,
      };
      setWeatherData(weatherProperties);
    } catch (error) {
      setOpenAlert(true);
    }
  }

  async function handleUpdateWeather() {
    setWeatherData(null);
    getCoordinates();
  }

  return (
    <div className="app">
      <Header />
      {!weatherData && <Loading />}
      <div className="container container-template-columns">
        <Controls handleUpdateWeather={handleUpdateWeather} />
        {weatherData ? <Card weatherData={weatherData} /> : <div />}
      </div>
      <Footer />
      <Alert title="Falha ao carregar clima!" type="error" open={openAlert} />
    </div>
  );
}

export default App;
