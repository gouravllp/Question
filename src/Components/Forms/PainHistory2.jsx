import React, { useState } from "react";

export const PainHistory2 = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [painHistory, setPainHistory] = useState({
    walkingLimited: "",
    therapyHelp: "",
    exercisesName: "",
    SurgicalHistory: "",
  });
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 mb-5">
        <div>
          <h3 className="text-white font-mainFont font-[600] text-[1.2vw]">
            Physical therapy Details
          </h3>
        </div>

        <div className="flex gap-4">
          <div className="my-2 flex flex-col gap-4 bg-whit p-6 rounded-lg shadow-md border border-[#0A1E44]">
            <p className="font-mainFont font-[400] text-white text-[1.1vw]">
              Is your walking limited due to pain?
            </p>
            <div className="flex justify-start items-center gap-4">
              <button
                onClick={() => {
                  setPainHistory({
                    ...painHistory,
                    walkingLimited: "Yes",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    limitedForPain: "Yes",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painHistory.walkingLimited === "Yes"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() =>{
                  setPainHistory({
                    ...painHistory,
                    walkingLimited: "No",
                  })
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    limitedForPain: "No",
                  });
                  }
                }
                className={`text-[#333333] px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painHistory.walkingLimited === "No"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div className="my-2 flex flex-col gap-4 p-6 bg-whit rounded-lg shadow-md border border-[#0A1E44]">
            <p className="font-mainFont font-[400] text-[1.1vw] text-white">
              Did this therapy help?
            </p>
            <div className="flex justify-start items-center gap-4">
              <button
                onClick={() =>{
                  setPainHistory({
                    ...painHistory,
                    therapyHelp: "Yes",
                  })
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    isTherapyhelp: "Yes",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painHistory.therapyHelp === "Yes"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() =>{
                  setPainHistory({
                    ...painHistory,
                    therapyHelp: "No",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    isTherapyhelp: "No",
                  });
                }}
                className={`text-[#333333]  px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  painHistory.therapyHelp === "No"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <div className="my-2 flex flex-col gap-4 ">
          <p className="font-mainFont font-[400] text-[1.1vw] text-white">
            Do you do any special exercises for your back or neck?
          </p>
          <div className="flex justify-start items-center gap-4">
            <input
              className="w-full border border-[#cdcdcd] bg-[#ffffff] px-5 py-3 rounded-full outline-none text-[1vw] font-[400] font-mainFont  text-[#333333] placeholder:text-[#333333]"
              placeholder="Enter Therapy"
            />
          </div>
        </div>

        <div className="my-2 flex flex-col gap-4 p-6 rounded-lg shadow-md bg-whit border border-[#0A1E44]">
          <p className="font-mainFont font-[400] text-[1.1vw] text-white">
            PAST SURGICAL HISTORY
          </p>
          <div className="flex justify-start items-center gap-4">
            <button
              onClick={() =>{
                setPainHistory({
                  ...painHistory,
                  SurgicalHistory: "Yes",
                })
                setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    pastSurgicalHistory: "Yes",
                  });
              }}
              className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                painHistory.SurgicalHistory === "Yes"
                  ? "text-white btnGraident"
                  : "text-black bg-white"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() =>{
                setPainHistory({
                  ...painHistory,
                  SurgicalHistory: "No",
                })
                setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    pastSurgicalHistory: "No",
                  });
              }}
              className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                painHistory.SurgicalHistory === "No"
                  ? "text-white btnGraident"
                  : "text-black bg-white"
              }`}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
