/* eslint-disable react/prop-types */

import cloudIcon from '../assets/icons/1530364_rain_storm_shower_weather.png'

const WeatherCard = ({ weatherData }) => {
  const { main, weather, wind, name, sys } = weatherData
  const { temp, feels_like, pressure, humidity } = main
  const { description } = weather[0]
  const { speed } = wind
  const { country } = sys
  return (
    <section className="rounded-2xl bg-white/80 p-10 lg:p-20">
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around">
        <div className="border-primary lg:pb-auto flex flex-col justify-center border-b-2 pb-10 md:flex-row lg:border-b-0 lg:border-r-2 lg:pr-10">
          <img
            className="mx-auto -mt-10 w-48 md:mt-auto md:w-64 md:scale-150"
            src={cloudIcon}
            alt={`Rain Icon`}
          />
          <div className="flex flex-col items-center justify-center gap-3 md:items-start ">
            <h3 className="text-primary text-8xl font-bold lg:text-9xl">
              {temp.toFixed(0)}
              <span className="align-top text-3xl">°C</span>
            </h3>
            <h5 className="text-4xl font-semibold lg:text-5xl">{`${name}, ${country}`}</h5>
            <h6 className="text-xl capitalize text-gray-700 lg:text-2xl">
              {description}
            </h6>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h5 className="text-primary mb-10 text-center text-2xl font-semibold lg:text-3xl">
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
