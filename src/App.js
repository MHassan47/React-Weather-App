import { useState } from "react";
import "./App.css";
import "./index";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const key = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const searchLocation = (event) => {
    if (event.key === "Enter" || event.onClick) {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response);
      });
    }
  };
  console.log(location);
  console.log(data);
  return (
    <div
      className={
        typeof data.main != "undefined"
          ? data.main.temp > 16
            ? "app_warm"
            : "app"
          : "app"
      }
    >
      <div className="container">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter a Location"
          />
          <div className="search_icon">
            <FaSearch onClick={searchLocation} />
          </div>
        </div>
        <div className="header">
          <div className="location">
            <div className="location_icon">
              <MdLocationOn />
            </div>
            <span>{data.name}</span>
          </div>
          <div className="temperature">
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : <p>°C</p>}
          </div>
        </div>
        <div className="weather_info">
          <div className="feels_like">
            {data.main ? (
              <p>{Math.round(data.main.feels_like)}°C</p>
            ) : (
              <p>N/A</p>
            )}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{Math.round(data.main.humidity)}%</p> : <p>N/A</p>}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{Math.round(data.wind.speed)}MPH</p> : <p>N/A</p>}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
