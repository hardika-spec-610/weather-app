import { format } from "date-fns";
import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeLocation from "./TimeLocation";
// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2469ed517ab38109f0124ab104977c4a";
const WeatherService = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  //   useEffect(() => {
  //     getWeatherData( );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const getWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2469ed517ab38109f0124ab104977c4a`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data ", data);
        setWeather(data);
        setCity("");

        console.log("weather", weather);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center my-6 items-center">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            type="text"
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
            placeholder="search for city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <BiSearch
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={getWeatherData}
          />
          <MdOutlineLocationOn
            size={28}
            fill="white"
            className="cursor-pointer transition ease-out hover:scale-125"
          />
          {/* Friday, 10 Feb 2023 | Local time: 12:32 PM */}
        </div>
      </div>
      {weather.main && (
        <>
          <TimeLocation cityName={weather.name} country={weather.sys.country} />
          <TemperatureAndDetails
            temperature={(weather.main.temp - 273.15).toFixed(2)}
            feelsLike={(weather.main.feels_like - 273.15).toFixed(2)}
            humidity={weather.main.humidity}
            windSpeed={weather.wind.speed}
            sunrise={format(new Date(weather.sys.sunrise * 1000), "p")}
            sunset={format(new Date(weather.sys.sunset * 1000), "p")}
            temMax={(weather.main.temp_max - 273.15).toFixed(2)}
            temMin={(weather.main.temp_min - 273.15).toFixed(2)}
          />
        </>
      )}
    </div>
  );
};

export default WeatherService;
