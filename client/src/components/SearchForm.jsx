import React, { useState } from "react";

const SearchForm = ({ dish, setDish, fetchImage }) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleClear = () => {
    setDish("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!isFetching) {
      setIsFetching(true);
      await fetchImage();
      setIsFetching(false);
    }
  };

  const hasText = dish !== "";

  return (
    <div className="w-full flex relative items-center">
      <div className="w-full flex relative items-center">
        {!hasText && (
          <span className="absolute left-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className="text-gray-500"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </span>
        )}
        <input
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What do you want to cook?"
          className={`flex-grow pr-10 outline-none p-[3px] ${
            hasText ? "pl-2" : "pl-8"
          } bg-white shadow-[0px_0.5px_2.5px_rgba(0,0,0,0.3),0px_0px_0px_0.5px_rgba(0,0,0,0.05)] rounded-[5px] focus:shadow-[0px_0.5px_2.5px_rgba(0,0,0,0.3),0px_0px_0px_0.5px_rgba(0,0,0,0.05),0px_0px_0px_3px_rgba(0,122,255,0.5)]`}
        />
        {hasText && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 text-gray-500"
          >
            ✖
          </button>
        )}
      </div>
      <button
        onClick={handleSearch}
        disabled={isFetching}
        className={`flex flex-col justify-center items-center outline-none p-[3px] px-4 ml-2 ${
          isFetching
            ? "bg-gray-400"
            : "bg-gradient-to-b from-[rgba(255,255,255,0.17)] to-transparent bg-[#007AFF]"
        } shadow-[0px_1px_2.5px_rgba(0,122,255,0.24),0px_0px_0px_0.5px_rgba(0,122,255,0.12)] rounded-[5px] text-white`}
      >
        {isFetching ? "Searching" : "Search"}
      </button>
    </div>
  );
};

export default SearchForm;
