/* eslint-disable react/prop-types */
import { getWeatherIcon } from '../utils/weatherIcons'
const WeeklyListItem = ({ weeklyWeather }) => {
  const { weather, temp } = weeklyWeather
  const timestamp = new Date(weeklyWeather.timestamp * 1000)

  const day = timestamp.toLocaleDateString('en-US', {
    weekday: 'short'
  })
  const date = timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })

  return (
    <li className="rounded-2xl bg-white/80 p-5 hover:bg-purple-100/80 lg:first:hidden">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-primary">{day}</h3>
        <h3 className="text-xl ">{date}</h3>
        <img
          src={getWeatherIcon(weather)}
          alt={`${weather.main} Icon`}
          className="w-32"
        />
        <h5 className="text-2xl font-semibold text-primary">
          {temp}
          <span className="align-top text-base">°C</span>
        </h5>
      </div>
    </li>
  )
}

export default WeeklyListItem
