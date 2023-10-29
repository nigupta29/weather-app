import atmosphereIcon from '../assets/icons/atmosphere.png'
import clearIcon from '../assets/icons/clear.png'
import cloudsIcon from '../assets/icons/clouds.png'
import drizzleIcon from '../assets/icons/drizzle.png'
import dustIcon from '../assets/icons/dust.png'
import fewCloudsIcon from '../assets/icons/few clouds.png'
import heavyRainIcon from '../assets/icons/heavy rain.png'
import rainIcon from '../assets/icons/rain.png'
import snowIcon from '../assets/icons/snow.png'
import thunderstormIcon from '../assets/icons/thunderstorm.png'

export const getWeatherIcon = (weather) => {
  const { main, description } = weather

  const atmosphere = new Set([
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado'
  ])

  if (atmosphere.has(main))
    return description.includes('dust') ? dustIcon : atmosphereIcon

  switch (main) {
    case 'Thunderstorm':
      return thunderstormIcon

    case 'Drizzle':
      return drizzleIcon

    case 'Rain':
      return description.includes('heavy') ? heavyRainIcon : rainIcon

    case 'Snow':
      return snowIcon

    case 'Clouds':
      return description.includes('few') || description.includes('scattered')
        ? fewCloudsIcon
        : cloudsIcon

    default:
      return clearIcon
  }
}
