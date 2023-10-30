const atmosphereIcon = '../images/icons/atmosphere.png'
const clearIcon = '/images/icons/clear.png'
const cloudsIcon = '../images/icons/clouds.png'
const drizzleIcon = '../images/icons/drizzle.png'
const dustIcon = '../images/icons/dust.png'
const fewCloudsIcon = '../images/icons/few clouds.png'
const heavyRainIcon = '../images/icons/heavy rain.png'
const rainIcon = '../images/icons/rain.png'
const snowIcon = '../images/icons/snow.png'
const thunderstormIcon = '../images/icons/thunderstorm.png'

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
