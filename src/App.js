import "./App.css";
import Forecast from "./components/Forecast";
import TopButton from "./components/TopButton";
import WeatherService from "./components/WeatherService";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      {/* <Inputs /> */}
      <WeatherService />
      {/* <TemperatureAndDetails /> */}
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
