import React from "react";

export const PastMedicalHistory = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
    });
  };
  return (
    <div className="flex justify-between w-full gap-5">
      <div className="flex-1">
        <div className="my-3">
          <h3 className="font-mainFont font-[600] text-[#fff] text-[1.2vw]">
            General Medical
          </h3>
        </div>
        <div className="my-6 flex flex-col gap-6 w-[60%]">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="cancer" className="text-white">1. Cancer</label>{" "}
              {/* <input id="cancer" type="radio" /> */}
            </div>
            <div>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter cancer type"
                onChange={handleOnChange}
                name="cancerType"
                value={patientMedicationInfo?.cancerType}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Diabetes" className="text-white">2. Diabetes</label>{" "}
              {/* <input id="Diabetes" type="radio" /> */}
            </div>
            <div>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter diabetes type"
                onChange={handleOnChange}
                name="diabetesType"
                value={patientMedicationInfo?.diabetesType}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-between w-full items-center gap-2">
              <label htmlFor="Diabetes" className="text-white">A. Controlled?</label>{" "}
              <div className="flex justify-center items-center  w-[32%] pr-2 bg-white rounded-full">
                <select
                  onChange={handleOnChange}
                  name="diabetesControlled"
                  value={patientMedicationInfo?.diabetesControlled}
                  className=" w-[95%] px-6 py-3 rounded-full border-none outline-none  font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor/60 bg-[#ffffff]"
                >
                  <option className="text-mainColor/50">-- Select --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Diabetes" className="text-white">B. Blood Sugar Average weekly</label>{" "}
            </div>
            <div>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="weekly blood sugar level"
                name="bloodSugarWeekly"
                onChange={handleOnChange}
                value={patientMedicationInfo?.bloodSugarWeekly}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Diabetes" className="text-white"> C. Last Hb A1c</label>{" "}
            </div>
            <div>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter last Hb Alc"
                onChange={handleOnChange}
                name="HBALC"
                value={patientMedicationInfo?.HBALC}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Diabetes" className="text-white">
                {" "}
                D. Any Diabetes related comorbidity
              </label>{" "}
            </div>
            <div>
              <input
                type="text"
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="If,any comorbidity"
                name="diabetesComorbidity"
                onChange={handleOnChange}
                value={patientMedicationInfo?.diabetesComorbidity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
