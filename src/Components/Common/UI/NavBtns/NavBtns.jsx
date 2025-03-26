import './NavBtns.css'


export const PreviousButton = ({ handlePrevious, disabled }) => {
  return (
    <>
      <button
        onClick={handlePrevious}
        type="button"
        disabled={disabled}
        className="flex justify-center items-center gap-3 shadowBTNs btnGraident text-baseColor px-7 py-2 rounded-full font-mainFont font-[500] text-[1.1vw] disabled:bg-baseColor2 disabled:text-mainColor/40 disabled:cursor-not-allowed   transition-all duration-150 ease-linear  border border-[#ff7537] forSvg"
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L10 18M4 12L10 6M4 12H14.5M20 12H17.5"
              stroke="#F8F8F8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>{" "}
        Previous
      </button>
    </>
  );
};

export const NextButton = ({ handleNext }) => {
  return (
    <>
      <button
        onClick={handleNext}
        type="button"
        className="flex justify-center items-center gap-3 shadowBTNs btnGraident text-baseColor px-12 py-2 rounded-full font-mainFont font-[500] text-[1.1vw]   transition-all duration-150 ease-linear border border-[#ff7537] forSvg"
      >
        Next / Skip{" "}
        <span>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L11 1M17 7L11 13M17 7L6.5 7M1 7H3.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  );
};
