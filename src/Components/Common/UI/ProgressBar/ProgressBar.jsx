import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ title, subtitle, currentStep, steps }) => {
  return (
    <>
      <div className="w-full shadow-m shadowsForMainWrapper rounded-xl overflow-hidden bg-white">
        <div className="bg-baseColor2 w-full relative h-[1vw]">
          <div
            className="absolute top-0 left-0 ProgressBarB bg-green-500/80 z-10 h-full transition-all duration-300 ease-in-out"
            style={{
              width: `${Math.round((currentStep / (steps.length - 1)) * 100)}%`,
            }}
          />
          <div className="absolute z-20 top-0 left-0 w-full h-full flex justify-evenly">
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
            <div className="h-full w-1 bg-baseColor" />
          </div>
        </div>
        <div className="w-full flex flex-col p-5">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-[2vw] font-[700] text-[#0A1E44]">
              {title}
            </h2>
            <p className="text-[2vw] font-[700] text-[#0A1E44]/80 transition-all duration-300 ease-in-out">
              {Math.round((currentStep / (steps.length - 1)) * 100)}%
            </p>
          </div>
          <p className="text-[#0A1E44]/70 font-mainFont font-[400] text-[1vw]">{subtitle}</p>
        </div>
      </div>
    </>
  );
};
