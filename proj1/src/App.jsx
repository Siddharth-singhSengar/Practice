import { useEffect, useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
  const [city, setCity] = useState("delhi");
  const [weatherData, setWeatherData] = useState(null);

  const date = new Date();
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const correctDate = `${day}/${month}/${year}`;
  const Api = "06cc8fbaac04f60ab50475c4fa158684";
 
  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png"; 
      case "Rain":
        return "/rain_with_cloud.png"; 
      case "Mist":
        return "/Tornado.png"; 
      case "Haze":  
        return "/sun.png"; 
      case "Smoke":
        return "/smoke.png";
      case "Clear":
        return "/clear.png" 
      default:
        return null;
    }
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`
      );
      const data = await response.json();
     // console.log(data);
     if (data.cod !== "404") {
       setWeatherData(data);
      
       
     }
      else{
        alert("City not found");
      }
    
    
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    getWeather();
  },[]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };
  return (
    <>
      <div className="app">
        <div className="container">
          {weatherData && (
            <>
              <div className="date" style={{ color: "black" }}>
                {correctDate}
              </div>
              <div className="city">{weatherData.name}</div>
              <div>
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                width="180px"
                alt="Weather Icon"
              />
              </div>
             
            
              <h2 className="degree">{weatherData.main.temp}</h2>
              <h3>{weatherData.weather[0].main}</h3>

              <form className="form" >
                <TextField
                  className="input"
                  placeholder="Enter city"
                  variant="outlined"
                  onChange={handleCityChange}
                />

                <button
                  type="submit"
                  className="button"
                  style={{ height: "55px", backgroundColor: "transparent" }}
                  onClick={handleSubmit}
                >
                  GET
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
