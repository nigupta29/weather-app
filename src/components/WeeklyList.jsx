import WeeklyListItem from './WeeklyListItem'

/* eslint-disable react/prop-types */
const WeeklyList = ({ weeklyWeatherData }) => {
  const formattedList = weeklyWeatherData?.daily.map((item) => ({
    id: item.dt,
    temp: item.feels_like.day,
    weather: item.weather[0],
    timestamp: item.dt
  }))

  return (
    <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-7">
      {formattedList.map((item) => (
        <WeeklyListItem key={item.id} weeklyWeather={item} />
      ))}
    </ul>
  )
}

export default WeeklyList
