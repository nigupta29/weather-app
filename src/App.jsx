import { useState } from 'react'
import bgImage from './assets/images/landscape.jpg'
import Footer from './components/Footer'
import MessageBox from './components/MessageBox'
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
  const [message, setMessage] = useState({})

  return (
    <div className="space-y-10 tracking-tighter" style={mainScreenStyles}>
      <div className="max-w-[1366px] space-y-10 px-5 py-5 md:p-10 lg:mx-auto lg:px-20 lg:py-10">
        <MessageBox message={message} />
        <SearchBox setWeatherData={setWeatherData} />
        <WeatherCard weatherData={weatherData} />
        <WeeklyList weeklyWeatherData={weeklyWeatherData} />
      </div>
      <Footer />
    </div>
  )
}

export default App
