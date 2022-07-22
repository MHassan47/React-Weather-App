import { useState } from "react";
import "./App.css";
import "./index";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    }
  };

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
            <FaSearch onClick />
          </div>
        </div>
        <div className="header">
          <div className="location">Toronto</div>
          <div className="temperature">
            <h1>24°C</h1>
          </div>
        </div>
        <div className="weather_info">
          <div className="feels_like">
            <p>20°C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>15KPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
