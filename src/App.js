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
      });
    }
  };
  // const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
  // console.log({ sunrise });
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
          {data.main ? (
            <div className="location">
              <div className="location_icon">
                <MdLocationOn />
              </div>
              <span>
                {data.name}, {data.sys.country}
              </span>
            </div>
          ) : null}
          <div className="temperature">
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
          </div>
        </div>
        <div className="weather_info">
          <div className="feels_like">
            {data.main ? (
              <p>{Math.round(data.main.feels_like)}°C</p>
            ) : (
              <p>N/A</p>
            )}
            <div>Feels like</div>
          </div>
          <div className="humidity">
            {data.main ? <p>{Math.round(data.main.humidity)}%</p> : <p>N/A</p>}
            <div>Humidity</div>
          </div>
          <div className="wind">
            {data.wind ? <p>{Math.round(data.wind.speed)}MPH</p> : <p>N/A</p>}
            <div>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
