import React, { useState } from "react";
// import { NextButton, PreviousButton } from "../Common/UI/NavBtns/NavBtns";

export const PatientParticulars = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [patientParticulars, setPatienParticulars] = useState({
    FirstName: "",
    lasteName: "",
    age: "",
    height: "5.6",
    weight: "60",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
    });
  };

  return (
    <div className="shadowsForMainWrapper p-10 rounded-xl bg-white">
      <div>
        <h3 className="font-mainFont font-[600] text-mainColor text-[1.4vw]">
          Enter Your Details
        </h3>
      </div>

      <form className="my-4 flex flex-col gap-5">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-3">
            <label
              htmlFor="fristName"
              className="font-mainFont font-[500] text-[.95vw] text-[#333333]"
            >
              First name
            </label>
            <input
              className=" w-full p-3 rounded-full inputShadow  outline-none bg-transparent font-mainFont font-[500] text-[1vw] placeholder:text-[#333333] placeholder:font-[400] text-mainColor"
              type="text"
              id="fristName"
              placeholder="Enter Your First Name"
              value={patientMedicationInfo.firstName}
              name="firstName"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-3">
            <label
              htmlFor="lastName"
              className="font-mainFont font-[500] text-[.95vw] text-[#333333]"
            >
              Last name
            </label>
            <input
              className=" w-full p-3 rounded-full inputShadow  outline-none bg-transparent font-mainFont font-[500] text-[1vw] placeholder:text-[#333333] placeholder:font-[400] text-mainColor"
              type="text"
              id="lastName"
              placeholder="Enter Your Last Name"
              value={patientMedicationInfo.lasteName}
              name="lastName"
              onChange={handleOnChange}
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-start items-start gap-3">
            <label
              htmlFor="DOB"
              className="font-mainFont font-[500] text-[.95vw] text-[#333333]"
            >
              Enter Age
            </label>
            <input
              className=" w-full p-3 rounded-full inputShadow  outline-none bg-transparent font-mainFont font-[500] text-[1vw] placeholder:text-[#333333] placeholder:font-[400] text-mainColor"
              type="text"
              id="DOB"
              placeholder="Enter Your Age"
              value={patientMedicationInfo.age}
              name="age"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="w-full flex justify-between items-center gap-10">
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="height"
              className="font-mainFont font-[500] text-[1.2vw] text-mainColor flex justify-start gap-6 items-center w-full"
            >
              <span className="font-mainFont font-[500] text-[.95vw] text-[#333333]">
                Height
              </span>
              <span className="text-[1.2dvw] font-[600] text-[#DB9A31]">
                {patientMedicationInfo.height.replace(".", '"')}
              </span>
            </label>
            <input
              className=" w-full p-3 rounded-md border-2 outline-none border-[#CDCDCD] font-mainFont font-[500] text-[1vw] placeholder:text-mainColor/50 text-mainColor"
              type="range"
              id="height"
              placeholder="Enter Your Height"
              value={patientMedicationInfo.height}
              name="height"
              onChange={handleOnChange}
              max={7.5}
              min={3}
              step={0.1}
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-start items-start gap-1">
            <label
              htmlFor="weight"
              className="font-mainFont font-[500] text-[1.2vw] text-mainColor w-full flex justify-start gap-6 items-center"
            >
              <span className="font-mainFont font-[500] text-[.95vw] text-[#333333]">
                Weight
              </span>
              <span className="text-[1.2dvw] font-[600] text-[#DB9A31]">
                {patientMedicationInfo.weight} KG
              </span>
            </label>
            <input
              className=" w-full p-3 rounded-md border-2 outline-none border-[#CDCDCD] font-mainFont font-[500] text-[1vw] placeholder:text-mainColor/50 text-mainColor rangeColor"
              type="range"
              id="weight"
              placeholder="Enter Your Weight"
              value={patientMedicationInfo.weight}
              name="weight"
              step={1}
              min={20}
              max={150}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
