/* eslint-disable react/prop-types */
import { RiCelsiusFill } from '@remixicon/react'
import { getWeatherIcon } from '../utils/weatherIcons'
const WeeklyListItem = ({ weeklyWeather }) => {
  const { weather, temp } = weeklyWeather
  const timestamp = new Date(weeklyWeather.timestamp * 1000)

  const Icon = getWeatherIcon(weather)

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
        <Icon size={80} className="my-3 text-primary/90" />
        <h5 className="text-2xl font-semibold">
          {temp}
          <RiCelsiusFill size={15} className="inline-flex align-top" />
        </h5>
      </div>
    </li>
  )
}

export default WeeklyListItem
