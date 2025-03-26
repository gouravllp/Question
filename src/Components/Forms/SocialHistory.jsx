import React, { useState } from "react";
import { PatientParticulars } from "./PatientParticulars";

const RelationshipStatus = [
  "Married",
  "Partnered ",
  "Single",
  "Divorced",
  "Separated",
  "Widowed",
];

export const SocialHistory = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [socialHistoryInfo, setSocialHistoryInfo] = useState({
    relationshipStatus: "",
    stairsInHouse: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
    });
  };
  return (
    <div className="mb-6 flex flex-col">
      <div className="flex flex-col gap-4 my-4  shadowsForMainWrapper rounded-lg shadow-md border border-[#0A1E44]  p-6">
        <div>
          <h3 className="font-mainFont font-[600] text-[1.5vw] text-[#fff]">
            Relationship Status
          </h3>
        </div>
        <div className="flex gap-4 flex-wrap justify-start w-full">
          {RelationshipStatus.map((item, id) => (
            <button
              onClick={() => {
                setSocialHistoryInfo({
                  ...socialHistoryInfo,
                  relationshipStatus: item,
                });
                setPatientMedicationInfo({
                  ...patientMedicationInfo,
                  relationshipStatus: item,
                });
              }}
              key={id}
              className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                socialHistoryInfo.relationshipStatus === item
                  ? "text-white btnGraident"
                  : "text-black bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between  gap-8 my-4">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col justify-start items-start gap-3 w-full">
            <label className="text-[#fff] font-[600] text-[1.2dvw]">
              Number of Children, if any
            </label>
            <input
              type="number"
              className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
              placeholder="Enter Number"
              name="NoOfChildrens"
              value={patientMedicationInfo?.NoOfChildrens}
              onChange={handleOnChange}
            />
          </div>
          <div className=" flex justify-start items-center gap-5 w-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              <label className="text-[#fff] font-[600] text-[1.2dvw]">
                Occupation
              </label>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter Occupation"
                name="occupation"
                value={PatientParticulars?.occupation}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className=" flex  justify-start items-center gap-5 w-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              <label className="text-[#fff] font-[600] text-[1.2dvw]">
                When was the last time you worked?
              </label>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter last working year"
                name="lastTimeWorked"
                value={patientMedicationInfo?.lastTimeWorked}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className=" flex  justify-start items-center gap-5 w-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              <label className="text-[#fff] font-[600] text-[1.2dvw]">
                Who is in your current household?
              </label>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter current household"
                onChange={handleOnChange}
                name="currentHousehold"
                value={patientMedicationInfo?.currentHousehold}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className=" flex  justify-start items-center gap-5 w-full p-6 rounded-lg shadowsForMainWrapper border border-gray-300">
            <div className="flex flex-col justify-center items-center gap-3 w-full">
              <label className=" font-[600] text-[1.2dvw] text-white">
                Are there any stairs in your current home?
              </label>
              <div className="flex justify-start items-center gap-4">
                <button
                  onClick={() => {
                    setSocialHistoryInfo({
                      ...socialHistoryInfo,
                      stairsInHouse: "Yes",
                    });
                    setPatientMedicationInfo({
                      ...patientMedicationInfo,
                      stairsInHouse: "Yes",
                    });
                  }}
                  className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                    socialHistoryInfo.stairsInHouse === "Yes"
                      ? "text-white btnGraident"
                      : "text-black bg-white"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setSocialHistoryInfo({
                      ...socialHistoryInfo,
                      stairsInHouse: "No",
                    });
                    setPatientMedicationInfo({
                      ...patientMedicationInfo,
                      stairsInHouse: "No",
                    });
                  }}
                  className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                    socialHistoryInfo.stairsInHouse === "No"
                      ? "text-white btnGraident"
                      : "text-black bg-white"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 my-10 w-full">
            <div className="flex flex-col justify-start gap-4 border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <label>Retired</label>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label>Unemployed</label>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label>Permanent Disability</label>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label>Peripheral Neuropathy</label>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start items-start gap-3 w-full">
                <label className="text-[#fff] font-[600] text-[1.2dvw]">
                  Date started
                </label>
                <input
                  type="date"
                  className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                  placeholder="Enter Number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
