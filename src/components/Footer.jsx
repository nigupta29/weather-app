import Container from './Container'

const Footer = () => {
  return (
    <div className="bg-white/50 text-sm text-slate-700 lg:text-base">
      <Container>
        <footer className="flex flex-col items-center justify-center">
          <h5 className="font-semibold">
            Made by
            <a
              href="https://github.com/nigupta29"
              target="__blank__"
              className="ml-1 underline decoration-primary"
            >
              Nikhil Gupta
            </a>
          </h5>
          <h5>
            Data via
            <a
              href="https://openweathermap.org/api"
              target="__blank__"
              className="ml-1 underline decoration-primary"
            >
              Open Weather API
            </a>
          </h5>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
