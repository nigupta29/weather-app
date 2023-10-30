/* eslint-disable react/prop-types */

import { getWeatherIcon } from '../utils/weatherIcons'

const WeatherCard = ({ weatherData }) => {
  const { main, weather, wind, name, sys } = weatherData
  const { temp, feels_like, pressure, humidity } = main
  const { main: weather_main, description } = weather[0]
  const { speed } = wind
  const { country } = sys
  return (
    <section className="rounded-2xl bg-white/80 p-10 lg:p-20">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around">
        <div className="flex flex-col items-center justify-center border-b-2 border-primary pb-10 md:flex-row md:gap-8 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-10">
          <img
            className="mx-auto -mt-10 w-48 md:mt-auto md:w-64 md:scale-150"
            src={getWeatherIcon(weather[0])}
            alt={`${weather_main} Icon`}
          />
          <div className="flex flex-col items-center justify-center gap-3 text-center md:items-start ">
            <h3 className="text-8xl font-bold text-primary lg:text-9xl">
              {temp.toFixed(0)}
              <span className="align-top text-3xl">°C</span>
            </h3>
            <h5 className="text-4xl font-semibold lg:text-5xl">{`${name}, ${country}`}</h5>
            <h6 className="text-xl font-semibold capitalize text-gray-700 lg:text-2xl">
              {description}
            </h6>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h5 className="mb-10 text-center text-2xl font-semibold text-primary lg:text-3xl">
            {`Feels like ${feels_like} `}
            <span className="align-top text-base">°C</span>
          </h5>
          <div className="mx-auto flex max-w-md justify-between text-xl lg:text-2xl">
            <div className="space-y-3 font-semibold">
              <p>Humidity</p>
              <p>Pressure</p>
              <p>Wind</p>
            </div>
            <div className="space-y-3 text-end">
              <p>{`${humidity} %`}</p>
              <p>{`${pressure} Pa`}</p>
              <p>{`${speed} km/hr`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherCard
