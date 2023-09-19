import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className="mx-auto mt-2 flex max-w-lg flex-col gap-5 px-2 md:mt-10">
      <SearchBox setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;
