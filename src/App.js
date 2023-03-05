import "./App.css";
import Weather from "./components/weather";

const App = () => {
  return (
    <div className=" bg-gradient-to-br from-cyan-700 to-blue-700 h-screen shadow-xl shadow-gray-400">
      <div className="mx-auto py-5 px-32  max-w-screen-md">
        <Weather />
      </div>
    </div>
  );
};

export default App;
