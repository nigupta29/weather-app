/* eslint-disable react/prop-types */
import cloudIcon from '../assets/icons/1530364_rain_storm_shower_weather.png'
const WeeklyListItem = ({ weather }) => {
  const timestamp = new Date(weather.timestamp)

  const date = timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  })
  const time = timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: ''
  })

  return (
    <li className="rounded-2xl bg-white/80 p-5 hover:bg-purple-100">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-primary text-xl">{date}</h3>
        <h3 className="text-xl">{time}</h3>
        <img src={cloudIcon} alt={`Rain Icon`} className="w-32" />
        <h5 className="text-2xl font-semibold">
          {weather.temp}
          <span className="align-top text-base">°C</span>
        </h5>
      </div>
    </li>
  )
}

export default WeeklyListItem
