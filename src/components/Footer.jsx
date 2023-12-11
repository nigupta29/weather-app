const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-white/50 p-10 lg:gap-5">
      <h5 className="font-semibold lg:text-lg">
        Created by
        <a
          href="https://github.com/nigupta29"
          target="__blank__"
          className="ml-1 underline decoration-primary"
        >
          Nikhil Gupta
        </a>
      </h5>
      <hgroup className="text-center text-sm lg:text-base">
        <p>
          Icons by
          <a
            href="https://www.iconfinder.com/Neolau1119"
            target="__blank__"
            className="ml-1 underline decoration-primary"
          >
            Sihan Liu
          </a>
        </p>
        <p>
          Data via
          <a
            href="https://openweathermap.org/api"
            target="__blank__"
            className="ml-1 underline decoration-primary"
          >
            Open Weather API
          </a>
        </p>
      </hgroup>
      <div className="flex gap-10">
        <img
          className="w-6 md:w-8"
          src={'/images/svg/react.svg'}
          alt="React Icon"
        />
        <img
          className="w-6 md:w-8"
          src={'/images/svg/tailwind.svg'}
          alt="Tailwind Icon"
        />
        <img
          className="w-6 md:w-8"
          src={'/images/svg/figma.svg'}
          alt="Figma Icon"
        />
      </div>
    </footer>
  )
}

export default Footer
