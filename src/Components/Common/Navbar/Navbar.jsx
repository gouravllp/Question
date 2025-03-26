import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LogoImg from "../../../assets/images/Logo.png";
import moment from "moment";

export const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('LTS'));
    }, 1000); // Updates every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-[90%] mx-auto py-5 flex justify-between items-center ">
        <div className="">
          <img src={LogoImg} alt="logo-img" className="w-[8vw] h-auto" />
        </div>
        <div className="flex justify-center items-center gap-5">
          <p className="font-mainFont text-mainColor font-[500] text-[1.1vw]">{currentTime}</p>
          <p className="font-mainFont text-mainColor font-[500] text-[1.1vw]">{moment().format('LL')}</p>
          <button className="BTNGradientBg px-6 border-none outline-none py-2 rounded-full text-white flex justify-center items-center gap-5 font-mainFont font-[500] text-[1.2vw]">
            <div className="h-7 w-7 flex justify-center items-center rounded-full bg-white">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 9.58334C13.6171 9.58334 15.3333 7.8671 15.3333 5.75001C15.3333 3.63291 13.6171 1.91667 11.5 1.91667C9.38287 1.91667 7.66663 3.63291 7.66663 5.75001C7.66663 7.8671 9.38287 9.58334 11.5 9.58334Z"
                  fill="#317BDB"
                />
                <path
                  d="M19.1667 16.7708C19.1667 19.1523 19.1667 21.0833 11.5 21.0833C3.83337 21.0833 3.83337 19.1523 3.83337 16.7708C3.83337 14.3894 7.26612 12.4583 11.5 12.4583C15.734 12.4583 19.1667 14.3894 19.1667 16.7708Z"
                  fill="#317BDB"
                />
              </svg>
            </div>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
