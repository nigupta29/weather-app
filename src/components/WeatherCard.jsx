/* eslint-disable react/prop-types */
function WeatherCard({ weatherData }) {
  if (weatherData.cod !== 200)
    return (
      <div className="capitalize">
        {weatherData?.message ??
          'Never be caught off guard by the weather again.'}
      </div>
    )

  const { name, weather, main, wind, sys } = weatherData
  const { temp, feels_like: feelsLike, humidity } = main
  const { speed: windSpeed } = wind
  const { country, sunrise, sunset } = sys
  const { description } = weather[0]

  return (
    <main className="flex flex-col border-2 rounded-3xl p-16 items-center gap-10">
      <h2 className="text-3xl">{`${name}, ${country}`}</h2>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-6xl tracking-tighter font-bold">
          {temp} <span className="text-3xl align-top font-normal">°C</span>
        </h1>
        <h3 className="text-2xl capitalize">{description}</h3>
        <h4 className="text-xl ">
          Feels like{' '}
          <span className="tracking-tighter underline decoration-orange-500">
            {feelsLike} °C
          </span>
        </h4>
      </div>

      <div className="flex justify-between gap-10 text-lg">
        <div className="text-left">
          <h3>Humidity : {humidity}%</h3>
          <h3>Wind : {windSpeed} km/h</h3>
        </div>

        <div className="text-right">
          <h3>Sunrise : {new Date(sunrise).toLocaleTimeString()}</h3>
          <h3>Sunset : {new Date(sunset).toLocaleTimeString()}</h3>
        </div>
      </div>
    </main>
  )
}

export default WeatherCard
