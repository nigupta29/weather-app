import WeeklyListItem from './WeeklyListItem'

/* eslint-disable react/prop-types */
const WeeklyList = ({ weeklyWeatherData }) => {
  const formattedList = weeklyWeatherData?.list.map((item) => ({
    id: item.dt,
    temp: item.main.temp,
    weather: item.weather[0],
    timestamp: item.dt_txt
  }))

  return (
    <ul className="xl:grid-cols- grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-7">
      {formattedList.map((item) => (
        <WeeklyListItem key={item.id} weather={item} />
      ))}
    </ul>
  )
}

export default WeeklyList
