import React, { useState } from "react";
import { MaleModel3D } from "../Common/MaleModel/MaleModel3D";
import ArmRedImg from "../../assets/images/Arm3dRed.png";
import ArmYellowImg from "../../assets/images/Arm3dYellow.png";
import ArmLowImg from "../../assets/images/Arm3dGreen.png";
// for shoulder
import ShoulderRedImg from "../../assets/images/ShoulderRedImg.png";
import ShoulderGreenImg from "../../assets/images/ShoulderGreenImg.png";
import ShoulderYellowImg from "../../assets/images/ShoulderYellowImg.png";

// default image...
import ArmSSimg from "../../assets/images/ArmDefaultImg.png";
import UpperBackSSimg from "../../assets/images/UpperBackSSImg.png";
import LowerBackSSimg from "../../assets/images/LowerBackSSImg.png";
import MidBackSSimg from "../../assets/images/MidBackSSImg.png";
import NeckSSimg from "../../assets/images/ScreenShortNeck.png";
import ShoulderSSimg from "../../assets/images/ShoulderDefaultImg.png";
import LegsSSimg from "../../assets/images/LegsSSImg.png";
import ThighSSimg from "../../assets/images/ThighSSImg.png";

export const ChoosePainLevel = ({
  screenShotImg,
  selectedPainLocation,
  selectedLoactionMulti,
  setSelectedLocationMulti,
  patientMedicationInfo,
  setPatientMedicationInfo,
}) => {
  const [painIntensity, setPainIntensity] = useState([]);

  const handlePainIntensity = (selectedIntensity, location) => {
    if (location === "Arms") {
      if (selectedIntensity === "Low") {
        // return "bg-green-400";
        return ArmLowImg;
      }
      if (selectedIntensity === "Normal") {
        return ArmYellowImg;
        // return "bg-yellow-400";
      }
      if (selectedIntensity === "High") {
        // return "bg-red-400";
        return ArmRedImg;
      }
      return ArmSSimg;
    }
    if (location === "Shoulder") {
      if (selectedIntensity === "Low") {
        // return "bg-green-400";
        return ShoulderGreenImg;
      }
      if (selectedIntensity === "Normal") {
        return ShoulderYellowImg;
        // return "bg-yellow-400";
      }
      if (selectedIntensity === "High") {
        // return "bg-red-400";
        return ShoulderRedImg;
      }
      return ShoulderSSimg;
    }
  };

  const handleDefaultImg = (curPainLoaction) => {
    if (curPainLoaction === "Arms") {
      return ArmSSimg;
    }
    if (curPainLoaction === "Mid Back") {
      return MidBackSSimg;
    }
    if (curPainLoaction === "Upper Back") {
      return UpperBackSSimg;
    }
    if (curPainLoaction === "Lower Back") {
      return LowerBackSSimg;
    }
    if (curPainLoaction === "Neck") {
      return NeckSSimg;
    }
    if (curPainLoaction === "Shoulder") {
      return ShoulderSSimg;
    }
    if (curPainLoaction === "Thigh") {
      return ThighSSimg;
    }
    if (curPainLoaction === "Legs") {
      return LegsSSimg;
    }
  };

  return (
    <>
      <div className="flex flex-col  gap-4 mb-8">
        <div className=" flex justify-start items-start p-4  relative">
          <div className="absolute top-0 -left-[20vw] w-full h-full gradientBg" />
          <div className="p-5 flex flex-col gap-5  rounded-lg w-[80%]  relative z-20 ">
            <h3 className="font-[600] text-white text-[2.5dvw] font-[Poppins]">
              Selected Pain Intensity
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {selectedLoactionMulti.map((cur, id) => (
            <div key={id} className="flex justify-between">
              <div className="flex-1">
                <h3 className="font-[600] text-white text-[1.8dvw] font-[Poppins]">
                  {cur.title}
                </h3>

                <div className="grid grid-cols-1 gap-3 w-[60%] mt-5">
                  <button
                    onClick={() => {
                      setPainIntensity([
                        ...painIntensity,
                        {
                          title: "Low",
                          id: id,
                        },
                      ]);
                      setSelectedLocationMulti((prvData) => {
                        const result = prvData.map((curr) =>
                          curr.title === cur.title
                            ? {
                                ...curr,
                                painLevel: cur.painLevel === "Low" ? "" : "Low",
                              }
                            : curr
                        );
                        setPatientMedicationInfo({
                          ...patientMedicationInfo,
                          selectedPainArea: result,
                        });
                        return result;
                      });
                    }}
                    className={` py-2.5 text-[1.1vw] bg-baseColor border-none outline-none rounded-full w-full font-mainFont font-[600] text-[#000]    btnGraident2 transition-all duration-100 ease-in  ${
                      cur.painLevel === "Low" && "text-white bg-green-400"
                    }`}
                  >
                    Low
                  </button>
                  <button
                    onClick={() => {
                      setPainIntensity([
                        ...painIntensity,
                        {
                          title: "Normal",
                          id: id,
                        },
                      ]);
                      setSelectedLocationMulti((prvData) => {
                        const result = prvData.map((curr) =>
                          curr.title === cur.title
                            ? {
                                ...curr,
                                painLevel:
                                  cur.painLevel === "Normal" ? "" : "Normal",
                              }
                            : curr
                        );
                        setPatientMedicationInfo({
                          ...patientMedicationInfo,
                          selectedPainArea: result,
                        });
                        return result;
                      });
                    }}
                    className={` py-2.5 text-[1.1vw] bg-baseColor border-none outline-none rounded-full w-full font-mainFont font-[600] text-[#000]    btnGraident2 transition-all duration-100 ease-in ${
                      cur.painLevel === "Normal" && "text-white bg-yellow-400"
                    } `}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => {
                      setPainIntensity([
                        ...painIntensity,
                        {
                          title: "High",
                          id: id,
                        },
                      ]);
                      setSelectedLocationMulti((prvData) => {
                        const result = prvData.map((curr) =>
                          curr.title === cur.title
                            ? {
                                ...curr,
                                painLevel:
                                  cur.painLevel === "High" ? "" : "High",
                              }
                            : curr
                        );

                        setPatientMedicationInfo({
                          ...patientMedicationInfo,
                          selectedPainArea: result,
                        });
                        return result;
                      });
                    }}
                    className={` py-2.5 text-[1.1vw] bg-baseColor border-none outline-none rounded-full w-full font-mainFont font-[600] text-[#000]    btnGraident2 transition-all duration-100 ease-in ${
                      cur.painLevel === "High" && "text-white bg-red-500"
                    } `}
                  >
                    High
                  </button>
                </div>
              </div>

              <div
                id="mobelWrapper"
                className="flex-1 flex justify-center items-center relative"
              >
                <div className="w-[45dvh] h-[45dvh]">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      cur.painLevel
                        ? handlePainIntensity(cur?.painLevel, cur.title)
                        : handleDefaultImg(cur.title)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
