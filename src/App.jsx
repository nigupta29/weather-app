import { useState } from 'react'
import bgImage from './assets/images/landscape.jpg'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import { cityWeatherDataToday } from './data/mockData'

const mainScreenStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

function App() {
  const [weatherData, setWeatherData] = useState(cityWeatherDataToday)

  return (
    <div className="tracking-tight" style={mainScreenStyles}>
      <div className="max-w-[1366px] p-5 md:p-10 lg:mx-auto lg:p-20">
        <SearchBox setWeatherData={setWeatherData} />
        <WeatherCard weatherData={weatherData} />
      </div>
    </div>
  )
}

export default App
