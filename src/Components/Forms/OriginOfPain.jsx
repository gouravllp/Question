import React, { useState } from "react";
import ModelImg2 from "../../assets/images/ModelImg2.png";
import { MaleModel3D } from "../Common/MaleModel/MaleModel3D";
import { Spinemodel } from "../Common/SpineModel/Spinemodel";
import { title } from "framer-motion/client";

export const OriginOfPain = ({
  selectedPainLocation,
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [OriginOfPainInfo, setOriginOfPainInfo] = useState({
    currentPainEpisode: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
      currentPainEpisodeBegin: OriginOfPainInfo.currentPainEpisode,
    });
  };
  return (
    <>
      <div className="flex justify-center gap-4 w-full">
        <div className="flex-1 p-4 flex justify-start items-start relative">
          <div className="absolute top-0 -left-[20vw] w-full h-full gradientBg" />

          <div className=" p-4 w-full rounded-lg flex flex-col justify-start items-start gap-8 relative z-20">
            <div className="flex flex-col justify-start gap-4 items-start w-full ">
              <label
                htmlFor="date"
                className="text-[1.2vw] font-mainFont font-[500] text-[#fff]"
              >
                Approximately when the pain did begin?
              </label>
              <div className="py-3 px-5  rounded-full w-[60%] bg-[#ffffff] inputShadow">
                <input
                  type="date"
                  id="date"
                  name="whenPainBegin"
                  onChange={handleOnChange}
                  value={patientMedicationInfo?.whenPainBegin}
                  className="w-full border-none outline-none text-[1vw] font-[400] font-mainFont bg-[#ffffff] text-[#333333] placeholder:text-[#333333] "
                />
              </div>
            </div>

            <div className="flex  flex-col justify-start gap-4 items-start w-full">
              <label
                htmlFor="date"
                className="text-[1.2vw] text-white font-mainFont font-[500]"
              >
                What caused current pain episode?
              </label>
              <div className="py-1 px-5 inputShadow rounded-full w-[60%] bg-[#ffffff]">
                <input
                  className="w-full border-none py-3 px-5 outline-none text-[1vw] font-[400] font-mainFont bg-transparent rounded-full text-[#333333] placeholder:text-[#333333]"
                  placeholder="Enter pain episode"
                  name="currentPainEpisode"
                  value={patientMedicationInfo?.currentPainEpisode}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="flex  flex-col justify-start gap-4 items-start w-full">
              <label
                htmlFor="date"
                className="text-[1.2vw] text-white font-mainFont font-[500]"
              >
                How did your current pain episode begin?
              </label>
              <div className="py-2 px-5  rounded-md w-[60%] flex justify-start gap-6 items-center">
                <button
                  onClick={() => {
                    setOriginOfPainInfo({
                      ...OriginOfPainInfo,
                      currentPainEpisode: "Gradually",
                    });
                    setPatientMedicationInfo({
                      ...patientMedicationInfo,
                      currentPainEpisodeBegin: "Gradually",
                    });
                  }}
                  className={`text-[1vw]  rounded-full px-4 py-2  font-[500] font-mainFont btnGraident2 ${
                    OriginOfPainInfo.currentPainEpisode === "Gradually"
                      ? "text-white btnGraident"
                      : "bg-white text-black"
                  }`}
                >
                  Gradually{" "}
                </button>
                <button
                  onClick={() => {
                    setOriginOfPainInfo({
                      ...OriginOfPainInfo,
                      currentPainEpisode:
                        OriginOfPainInfo == "Suddenly" ? "" : "Suddenly",
                    });
                    setPatientMedicationInfo({
                      ...patientMedicationInfo,
                      currentPainEpisodeBegin: "Suddenly",
                    });
                  }}
                  className={`text-[1vw]  rounded-full px-4 py-2  btnGraident2 font-[500] font-mainFont   ${
                    OriginOfPainInfo.currentPainEpisode === "Suddenly"
                      ? "text-white btnGraident"
                      : "bg-white text-black"
                  }`}
                >
                  Suddenly
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center h-[70vh]">
          {/* <MaleModel3D cameraPosition={selectedPainLocation?.cameraPosition}
          distance={selectedPainLocation?.distance} /> */}

          {/* <Spinemodel /> */}
        </div>
      </div>
    </>
  );
};
