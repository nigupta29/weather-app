import { useState } from 'react'
import bgImage from './assets/images/landscape.jpg'
import Footer from './components/Footer'
import MessageBox from './components/MessageBox'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import WeeklyList from './components/WeeklyList'

const mainScreenStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
}

const API_KEY = import.meta.env.VITE_API_KEY
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&`

function App() {
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [weeklyWeatherData, setWeeklyWeatherData] = useState(null)
  const [message, setMessage] = useState({})

  const setLoading = () => {
    setMessage({
      type: 'loading',
      msg: `Fetching Details for ${searchCity}`
    })
  }

  const clearLoading = () => {
    setMessage({ type: 'date' })
  }

  const setErrorMessage = (msg) => {
    setMessage({
      type: 'error',
      msg: `Error: ${msg}`
    })
  }

  const handleClear = () => {
    setSearchCity('')
    setWeatherData(null)
    setWeeklyWeatherData(null)
    clearLoading()
  }

  const getCurrentWeatherDetails = async () => {
    try {
      setLoading()
      const res = await fetch(`${currentWeatherURL}q=${searchCity}`)
      const data = await res.json()
      if (res.status >= 400) {
        setErrorMessage(data.message)
        return
      }
      setWeatherData(data)
      clearLoading()
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchCity) return

    getCurrentWeatherDetails()
  }

  return (
    <div className="space-y-10 tracking-tighter" style={mainScreenStyles}>
      <div className="max-w-[1366px] space-y-10 px-5 py-5 md:p-10 lg:mx-auto lg:px-20 lg:py-10">
        <MessageBox message={message} />
        <SearchBox
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
        />
        {weatherData && <WeatherCard weatherData={weatherData} />}
        {weeklyWeatherData && (
          <WeeklyList weeklyWeatherData={weeklyWeatherData} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
