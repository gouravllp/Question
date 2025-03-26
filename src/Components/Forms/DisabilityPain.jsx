import React, { useState } from "react";

export const DisabilityPain = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [painDisability, setpainDisability] = useState({
    walkingLimited: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
    });
  };
  return (
    <>
      <div className="w-full mb-5">
        <div className="flex flex-col gap-4 w-[60%]">
          <div>
            <div>
              <h3 className="font-mainFont font-[600] text-white text-[1.1vw]">
                How much time can you stand in one location due to pain?
              </h3>
            </div>
            <div className="flex justify-start items-center gap-4 my-3">
              <div className="flex justify-center items-center gap-2 flex-shrink-0  py-2 px-4 rounded-full border border-[#0A1E44]">
                <input
                  name="timeYouCanStandInOneLocation"
                  onChange={handleOnChange}
                  type="radio"
                  value="10 mins"
                  id="Shoulder"
                />{" "}
                <label htmlFor="Shoulder" className="text-[#fff]">
                  10 mins
                </label>
              </div>
              <div className="flex justify-center items-center gap-2 flex-shrink-0  py-2 px-4 rounded-full border border-[#0A1E44]">
                <input
                  name="timeYouCanStandInOneLocation"
                  onChange={handleOnChange}
                  type="radio"
                  value="30 mins"
                  id="Arm"
                />{" "}
                <label htmlFor="Arm" className="text-[#fff]">
                  30 mins
                </label>
              </div>
              <div className="flex justify-center items-center gap-2 flex-shrink-0 border border-[#0A1E44]  py-2 px-4 rounded-full">
                <input
                  name="timeYouCanStandInOneLocation"
                  onChange={handleOnChange}
                  type="radio"
                  value="1 hr"
                  id="Forearm "
                />{" "}
                <label htmlFor="Forearm " className="text-[#fff]">
                  1 hr{" "}
                </label>
              </div>
              <div className="flex justify-center items-center gap-2 flex-shrink-0  py-2 px-4 rounded-full border border-[#0A1E44]">
                <input
                  name="timeYouCanStandInOneLocation"
                  onChange={handleOnChange}
                  type="radio"
                  value="More than 1 hr"
                  id="Hand "
                />{" "}
                <label htmlFor="Hand " className="text-[#fff]">
                  More than 1 hr{" "}
                </label>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 className="font-mainFont font-[600] text-white text-[1.1vw]">
                How much time can you walk without pain?
              </h3>
            </div>
            <div className="flex justify-start items-center gap-4 my-3">
              <div className="flex justify-center items-center gap-2 flex-shrink-0 border border-[#0A1E44]  py-2 px-4 rounded-full">
                <input
                  name="timeYouCanWalkWithoutPain"
                  onChange={handleOnChange}
                  value="10 mins"
                  type="radio"
                  id="10min"
                />{" "}
                <label htmlFor="10min" className="text-white">
                  10 mins
                </label>
              </div>
              <div className="flex justify-center items-center border border-[#0A1E44] gap-2 flex-shrink-0  py-2 px-4 rounded-full">
                <input
                  name="timeYouCanWalkWithoutPain"
                  onChange={handleOnChange}
                  value="30 mins"
                  type="radio"
                  id="30mins"
                />{" "}
                <label htmlFor="30mins" className="text-white">
                  30 mins
                </label>
              </div>
              <div className="flex justify-center items-center border border-[#0A1E44] gap-2 flex-shrink-0  py-2 px-4 rounded-full">
                <input
                  name="timeYouCanWalkWithoutPain"
                  onChange={handleOnChange}
                  value="1 hr"
                  type="radio"
                  id="1hr"
                />{" "}
                <label htmlFor="1hr" className="text-white">
                  1 hr{" "}
                </label>
              </div>
              <div className="flex justify-center items-center border border-[#0A1E44] gap-2 flex-shrink-0  py-2 px-4 rounded-full">
                <input
                  name="timeYouCanWalkWithoutPain"
                  onChange={handleOnChange}
                  value="More than 1 hr"
                  type="radio"
                  id="moreThen"
                />{" "}
                <label htmlFor="moreThen" className="text-white">
                  More than 1 hr{" "}
                </label>
              </div>
            </div>
          </div>
          <div className=" w-[60%] p-6 rounded-lg shadowsForMainWrapper border border-[#0A1E44]">
            <div>
              <h3 className="font-mainFont font-[600] text-white text-[1.1vw]">
                Is your walking limited due to pain?
              </h3>
            </div>
            <div className="flex justify-start items-center gap-4 my-3">
              <button
                onClick={() => {
                  setpainDisability({
                    ...painDisability,
                    walkingLimited: "Yes",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    isWalkingLimited: "Yes",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painDisability.walkingLimited === "Yes"
                    ? "text-white btnGraident"
                    : "bg-white text-black"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setpainDisability({
                    ...painDisability,
                    walkingLimited: "No",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    isWalkingLimited: "No",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painDisability.walkingLimited === "No"
                    ? "text-white btnGraident"
                    : "bg-white text-black"
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
