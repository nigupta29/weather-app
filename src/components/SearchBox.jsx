/* eslint-disable react/prop-types */

import { RiCloseLine, RiGithubLine, RiSearch2Line } from '@remixicon/react'

const SearchBox = ({
  searchCity,
  setSearchCity,
  handleClear,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white/50 px-5 py-3">
      <div className="flex flex-nowrap items-center gap-1 md:gap-2">
        <a
          href="https://github.com/nigupta29/weather-app"
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-xl p-1 hover:bg-white"
        >
          <RiGithubLine />
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
          <button
            className="rounded-xl p-1 hover:bg-white"
            type="button"
            onClick={handleClear}
          >
            <RiCloseLine />
          </button>
        )}
        <button
          className="rounded-xl p-1 hover:bg-white"
          type="submit"
          id="search-btn"
        >
          <RiSearch2Line />
        </button>
      </div>
    </form>
  )
}

export default SearchBox
