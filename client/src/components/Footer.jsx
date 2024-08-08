import React from "react";

const Footer = () => (
  <footer className="mt-3 text-center text-[12px] flex flex-row justify-between">
      <a
        href="https://github.com/basith-ahmed/cook"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[12px] w-[12px] inline-block mr-[2px] -mb-[2px]"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#3b82f6"
              stroke-width="1.5"
            ></circle>{" "}
            <path
              d="M12 17V11"
              stroke="#3b82f6"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <circle
              cx="1"
              cy="1"
              r="1"
              transform="matrix(1 0 0 -1 11 9)"
              fill="#3b82f6"
            ></circle>{" "}
          </g>
        </svg>
        Read documentation
      </a>
    <a
      href="https://cook-api.basithahmed.me"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline flex items-center justify-center"
    >
      Go to API &#10562;
    </a>
  </footer>
);

export default Footer;
