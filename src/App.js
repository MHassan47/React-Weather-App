import { useState } from "react";
import "./App.css";
import "./index";
import axios from "axios";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`;
function App() {
  const [location, setLocation] = useState();

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="location">Toronto</div>
          <div className="temperature">
            <p>24°C</p>
          </div>
          <div className="humidity">20%</div>
          <div className="wind">15KPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
