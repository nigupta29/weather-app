import {
  RiCloudLine,
  RiCloudy2Line,
  RiCloudyLine,
  RiDrizzleLine,
  RiFoggyLine,
  RiHazeLine,
  RiHeavyShowersLine,
  RiMistLine,
  RiRainyLine,
  RiSnowyLine,
  RiSunLine,
  RiThunderstormsLine,
  RiTornadoLine
} from '@remixicon/react'

export const getWeatherIcon = (weather) => {
  const { main, description } = weather

  switch (main) {
    case 'Mist':
      return RiMistLine

    case 'Haze':
      return RiHazeLine

    case 'Fog':
      return RiFoggyLine

    case 'Tornado':
      return RiTornadoLine

    case 'Smoke':
    case 'Dust':
    case 'Sand':
    case 'Ash':
    case 'Squall':
      return RiCloudyLine

    case 'Thunderstorm':
      return RiThunderstormsLine

    case 'Drizzle':
      return RiDrizzleLine

    case 'Rain':
      return description.includes('heavy') ? RiHeavyShowersLine : RiRainyLine

    case 'Snow':
      return RiSnowyLine

    case 'Clouds':
      return description.includes('few') || description.includes('scattered')
        ? RiCloudLine
        : RiCloudy2Line

    default:
      return RiSunLine
  }
}
