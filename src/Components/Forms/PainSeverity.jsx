import React from "react";
import { MaleModel3D } from "../Common/MaleModel/MaleModel3D";

export const PainSeverity = ({ selectedPainLocation }) => {
  return (
    <div className="flex justify-between gap-4 my-5">
      <div className="flex-1 flex justify-start items-start relative">
        <div className="absolute top-0 -left-[20vw] w-full h-full gradientBg" />
        <div className=" p-6  rounded-lg w-[85%] flex flex-col justify-start items-start relative z-20">
          <div className="bg-[#333333] rounded-full w-auto px-7 py-2">
            <h3 className="font-mainFont font-[700] text-white text-[1.2vw]">
              Pain in {selectedPainLocation?.painLocation}
            </h3>
          </div>

          <div className="flex flex-col gap-8 justify-start my-4 w-full">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <div className="flex justify-between items-center w-full">
                <label
                  htmlFor="pain-right-now"
                  className="font-mainFont font-[400] text-[1vw]"
                >
                  Pain Right Now
                </label>
                <p className="text-[1vw] font-[600] font-mainFont text-[#DB9A31]">
                  Level 5
                </p>
              </div>
              <input
                type="range"
                className=" w-full border-none outline-none rangInputs"
                max={10}
                min={1}
                id="pain-right-now"
                defaultValue={3}
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <div className="flex justify-between items-center w-full">
                <label
                  htmlFor="pain-right-now"
                  className="font-mainFont font-[400] text-[1vw]"
                >
                  The Worst It Gets
                </label>
                <p className="text-[1vw] font-[600] font-mainFont text-[#DB9A31]">
                  Level 5
                </p>
              </div>
              <input
                type="range"
                className=" w-full border-none outline-none rangInputs"
                max={10}
                min={1}
                id="pain-right-now"
                defaultValue={3}
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <div className="flex justify-between items-center w-full">
                <label
                  htmlFor="pain-right-now"
                  className="font-mainFont font-[400] text-[1vw]"
                >
                  The Best It Gets
                </label>
                <p className="text-[1vw] font-[600] font-mainFont text-[#DB9A31]">
                  Level 5
                </p>
              </div>
              <input
                type="range"
                className=" w-full border-none outline-none rangInputs"
                max={10}
                min={1}
                id="pain-right-now"
                defaultValue={3}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center h-[70vh]">
        <MaleModel3D
          cameraPosition={selectedPainLocation?.cameraPosition}
          distance={selectedPainLocation?.distance}
        />
      </div>
    </div>
  );
};
