import { useState } from "react";
import "./App.css";
import "./index";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const key = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

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
    <div className="app">
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
          <div className="location">{data.name}</div>
          <div className="temperature">
            <h1>{data.main.temp}°C</h1>
          </div>
        </div>
        <div className="weather_info">
          <div className="feels_like">
            <p>{data.main.feels_like}</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data.wind.speed}MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
