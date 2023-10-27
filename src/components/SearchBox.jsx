/* eslint-disable react/prop-types */
import { useState } from 'react'

// Function to update the URL with the city parameter
function updateURL(city) {
  const url = new URL(window.location.href)
  url.searchParams.set('city', city)
  window.history.pushState({ city }, '', url.toString())
}

// Function to clear the parameters from the URL
function clearURL() {
  const newURL = window.location.origin + window.location.pathname
  history.replaceState(null, '', newURL)
}

// Function to read the city parameter from the URL
function getCityFromURL() {
  const url = new URL(window.location.href)
  const cityParam = url.searchParams.get('city')
  return cityParam || ''
}

function SearchBox({ setWeatherData }) {
  const [city, setCity] = useState(getCityFromURL())

  async function handleSubmit(event) {
    event.preventDefault()

    if (city === '') return

    updateURL(city)
    const openWeatherApiUrl = new URL(
      'https://api.openweathermap.org/data/2.5/weather'
    )
    openWeatherApiUrl.searchParams.set('units', 'metric')
    openWeatherApiUrl.searchParams.set('appId', import.meta.env.VITE_API_KEY)
    openWeatherApiUrl.searchParams.set('q', city)
    let data
    try {
      const response = await fetch(openWeatherApiUrl)
      data = await response.json()
    } catch (error) {
      console.log('ereriere')
    }

    if (data.cod !== 200) document.title = 'Error | Weather Today'
    else document.title = `${city} | Weather Today`
    setWeatherData(data)
  }

  function clearResults() {
    setCity('')
    setWeatherData({})
    document.title = 'Weather Today'
    clearURL()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 text-lg pb-2">
        <input
          className="border-none w-full text-gray-700 mr-3 py-1 pr-2 leading-tight focus:outline-none"
          type="text"
          id="city"
          name="city"
          value={city}
          placeholder="Enter your location..."
          onChange={(event) => setCity(event.target.value)}
        />

        <button
          className={`flex-shrink-0  text-sm  py-1 px-2 mr-2 ${
            city === '' ? 'hidden' : ''
          }`}
          type="button"
          onClick={clearResults}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button
          className="flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 "
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBox
