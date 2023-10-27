import { useState } from 'react'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <div className="">
      <SearchBox setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}

export default App
