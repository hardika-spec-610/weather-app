import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { BiDroplet, BiWind } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { BsSunset } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">4°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={20} className="mr-1" />
            Real fell:<span className="font-medium ml-1">4°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiDroplet size={20} className="mr-1" />
            Humidity:<span className="font-medium ml-1">80%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={20} className="mr-1" />
            Wind Speed:<span className="font-medium ml-1">19.9km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Sunrise:<span className="font-medium ml-1">06:00</span>
        </p>
        <p className="font-light">|</p>
        <BsSunset />
        <p className="font-light">
          Sunset:<span className="font-medium ml-1">17:30</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowUp />
        <p className="font-light">
          High:<span className="font-medium ml-1">7°</span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowDown />
        <p className="font-light">
          Low:<span className="font-medium ml-1">3°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
