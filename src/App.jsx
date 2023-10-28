import { useState } from 'react'
import bgImage from './assets/images/landscape.jpg'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'

const mainScreenStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

function App() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <div className="" style={mainScreenStyles}>
      <SearchBox setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}

export default App
