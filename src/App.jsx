import { useState } from 'react'
import Footer from './components/Footer'
import MessageBox from './components/MessageBox'
import SearchBox from './components/SearchBox'
import WeatherCard from './components/WeatherCard'
import WeeklyList from './components/WeeklyList'

const API_KEY = import.meta.env.VITE_API_KEY
const params = `?appid=${API_KEY}&units=metric&`

const openWeatherAPI = 'https://api.openweathermap.org/data/2.5'
const currentWeatherURL = `${openWeatherAPI}/weather${params}`
const weeklyWeatherURL = `${openWeatherAPI}/onecall${params}`

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

  const fetchDetails = async (fetchUrl, setDataToState) => {
    try {
      setLoading()
      const res = await fetch(fetchUrl)
      const data = await res.json()
      if (res.status >= 400) {
        setErrorMessage(data.message)
        return null
      }
      setDataToState(data)
      clearLoading()
      return data
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!searchCity) return

    const weatherURL = `${currentWeatherURL}q=${searchCity}`
    const weatherData = await fetchDetails(weatherURL, setWeatherData)

    if (weatherData) {
      const {
        coord: { lat, lon }
      } = weatherData
      const weeklyURL = `${weeklyWeatherURL}&lat=${lat}&lon=${lon}`
      await fetchDetails(weeklyURL, setWeeklyWeatherData)
    }
  }

  return (
    <div className="flex min-h-screen flex-col space-y-10 bg-[url('/images/landscape.jpg')] bg-cover bg-center bg-no-repeat tracking-tighter">
      <div className="mx-auto w-full max-w-[1366px] flex-grow space-y-10 px-5 py-5 md:p-10 lg:px-20 lg:py-10">
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
