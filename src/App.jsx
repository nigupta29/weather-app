import { useState } from 'react'
import bgImage from './assets/images/landscape.jpg'
import Footer from './components/Footer'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import WeeklyList from './components/WeeklyList'
import { cityWeatherDataToday, cityWeatherDataWeekly } from './data/mockData'

const mainScreenStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

function App() {
  const [weatherData, setWeatherData] = useState(cityWeatherDataToday)

  const [weeklyWeatherData, setWeeklyWeatherData] = useState(
    cityWeatherDataWeekly
  )

  return (
    <div className="space-y-10 tracking-tighter" style={mainScreenStyles}>
      <div className="max-w-[1366px] space-y-10 p-5 md:p-10 lg:mx-auto lg:p-20">
        <SearchBox setWeatherData={setWeatherData} />
        <WeatherCard weatherData={weatherData} />
        <WeeklyList weeklyWeatherData={weeklyWeatherData} />
      </div>
      <Footer />
    </div>
  )
}

export default App
