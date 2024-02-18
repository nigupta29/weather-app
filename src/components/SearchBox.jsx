/* eslint-disable react/prop-types */

const SearchBox = ({
  searchCity,
  setSearchCity,
  handleClear,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/50 px-5 py-3">
      <div className="flex flex-nowrap items-center gap-3 md:gap-5">
        <a
          href="https://github.com/nigupta29/weather-app"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden md:block"
        >
          <img
            className="w-10 rounded-lg p-1 hover:bg-primary/10"
            src="/images/svg/github.svg"
            alt="Github Repo Link"
          />
        </a>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Search for any location..."
          className="w-2/4 flex-grow rounded-2xl border-0 bg-inherit px-3 py-2 text-lg outline-none ring-primary placeholder:text-gray-600 focus:ring-2 md:text-xl"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        {searchCity && (
          <button type="button" onClick={handleClear}>
            <img
              className="w-10 rounded-lg p-1 hover:bg-primary/10"
              src="/images/svg/close.svg"
              alt="Clear Search Field"
            />
          </button>
        )}
        <button type="submit" id="search-btn">
          <img
            className="w-10 rounded-lg p-1 hover:bg-primary/10"
            src="/images/svg/search.svg"
            alt="Search for city"
          />
        </button>
      </div>
    </form>
  )
}

export default SearchBox
