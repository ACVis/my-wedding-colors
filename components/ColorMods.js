import React from "react";

function incrementMod(mod, setMod, increment, limit = 20) {
  if (Math.abs(mod + increment) > Math.abs(limit)) {
    return;
  } else {
    setMod(mod + increment);
  }
}

export default function ColorMods({
  lightness,
  mod,
  setMod,
  limit,
  increment = 5
}) {
  // let { current: isSubtractDisabled } = React.useRef(false);
  // let { current: isAddDisabled } = React.useRef(false);

  let [isSubtractDisabled, setSubtractDisabled] = React.useState(false);
  let [isAddDisabled, setAddDisabled] = React.useState(false);
  React.useEffect(() => {
    setSubtractDisabled(lightness + mod <= 0);
    setAddDisabled(lightness + mod >= 100);
    console.log(
      "isAddDisabled",
      isAddDisabled,
      `lightness ${lightness} mod ${mod}`
    );
  }, [lightness, mod, isAddDisabled]);
  return (
    <>
      <button
        disabled={isAddDisabled}
        className="rounded my-1 px-2"
        onClick={() => incrementMod(mod, setMod, increment, limit)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 hover:text-gray-600 ${
            isAddDisabled
              ? " text-gray-500 cursor-not-allowed"
              : " text-gray-900"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        disabled={isSubtractDisabled}
        className="rounded my-1 px-2"
        onClick={() => incrementMod(mod, setMod, -increment, limit)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 hover:text-gray-600 ${
            isSubtractDisabled
              ? " text-gray-500 cursor-not-allowed"
              : " text-gray-900"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}
