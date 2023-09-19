/* eslint-disable react/prop-types */
import { useState } from 'react'

function SearchBox({ setWeatherData }) {
  const [city, setCity] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (city === '') return

    const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    url.searchParams.set('units', 'metric')
    url.searchParams.set('appId', import.meta.env.VITE_API_KEY)
    url.searchParams.set('q', city)

    const response = await fetch(url)
    const data = await response.json()
    setWeatherData(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 text-lg pb-2">
        <input
          className="border-none w-full text-gray-700 mr-3 py-1 pr-2 leading-tight focus:outline-none"
          type="text"
          id="city"
          name="city"
          placeholder="Enter your location..."
          onChange={(event) => {
            setCity(() => event.target.value)
          }}
        />
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
