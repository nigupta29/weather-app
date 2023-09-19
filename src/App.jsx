import { Fragment, useState } from 'react'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'

function App() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <Fragment>
      <SearchBox setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </Fragment>
  )
}

export default App
