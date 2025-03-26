import React, { useState } from "react";

const listData = [
  {
    title: "Spine Surgery",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "spineSurgery",
  },
  {
    title: "Psychological Therapy",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "psychologicalTherapy",
  },
  {
    title: "Hot/Cold Packs",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "hotColdPack",
  },
  {
    title: "TENS Unit",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "tensUnit",
  },
  {
    title: "Physical Therapy",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "physicalTherapy",
  },
  {
    title: "Branch Support",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "branchSupport",
  },
  {
    title: "Massage Therapy",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "massageTherapy",
  },
  {
    title: "Spinal Cord Stimulator Trial",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "spinalCordStimulator",
  },
  {
    title: "Chiropractic Care",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "chiropracticCare",
  },
  {
    title: "Acupuncture",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "acupuncture",
  },
  {
    title: "Medication",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "medication",
  },
  {
    title: "Spinal Cord Stimulator Implant",
    options: ["Helped Pain", "Worsened", "No Change"],
    name: "spinalCordStimulatorImplant",
  },
];

export const PainHistory = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatientMedicationInfo({
      ...patientMedicationInfo,
      [name]: value,
    });
  };
  return (
    <>
      <div className="mb-5 w-full flex justify-between items-start gap-5">
        
        <div className="flex flex-col gap-5 w-[50%]">
          {listData.map((list, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={list.title}
              options={list.options}
              isOpen={openIndex === index}
              onToggle={handleToggle}
              name={list.name}
              handleOnChange={handleOnChange}
            />
          ))}
        </div>

        <div className="w-[50%] my-2 flex justify-end">
          <div className="w-[60%] flex flex-col justify-start items-start gap-3">
            <label className="font-[500] text-[1.2dvw] text-[#333333]">
              Others
            </label>
            <input
              className=" w-full px-6 py-3 rounded-full border-2 outline-none border-[#CDCDCD] font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
              placeholder="Enter Therapy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const AccordionItem = ({
  title,
  options,
  isOpen,
  index,
  onToggle,
  name,
  handleOnChange,
}) => {
  return (
    <>
      <div className="bg-transparent">
        <button
          style={{
            background: isOpen ? "#0A1E44" : "transparent",
            color: isOpen ? "#fff" : "#0C0544",
          }}
          className={`flex flex-col justify-start items-start w-full gap-4 py-4 border-b border-[#0A1E44] ${
            isOpen ? "px-8 rounded-full border-b-0" : "px-4 rounded-none "
          } text-left  focus:outline-none  transition-all duration-300 ease-linear`}
          onClick={() => onToggle(index)}
        >
          <div className="flex justify-between items-center w-full">
            <span
              className={`font-[700] font-mainFont text-[1.3vw] ${
                isOpen ? "text-[#fff]" : "text-white"
              }`}
            >
              {title}
            </span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 transition-transform duration-500 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            >
              <path
                d="M13.9999 3.33326L1.99994 3.33326C1.87845 3.33364 1.75936 3.36715 1.65549 3.43018C1.55163 3.49321 1.46692 3.58337 1.41048 3.69097C1.35404 3.79856 1.32802 3.9195 1.33521 4.04079C1.3424 4.16207 1.38253 4.27909 1.45128 4.37926L7.45128 13.0459C7.69994 13.4053 8.29861 13.4053 8.54794 13.0459L14.5479 4.37926C14.6174 4.2793 14.6581 4.16222 14.6657 4.04073C14.6733 3.91925 14.6474 3.79801 14.5909 3.69019C14.5344 3.58237 14.4495 3.49209 14.3453 3.42917C14.2411 3.36624 14.1217 3.33307 13.9999 3.33326Z"
                fill="#0A1E44"
              />
            </svg>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-linear ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-6 bg-transparent flex  gap-4">
            {options.map((cur, id) => (
              <>
                <div className="flex justify-start items-center gap-3 border border-[#0A1E44] px-3 py-1 rounded-full">
                  <input
                    value={cur}
                    onChange={handleOnChange}
                    name={name}
                    type="radio"
                    id={`section${index + 1}_${id}`}
                  />
                  <label
                    htmlFor={`section${index + 1}_${id}`}
                    className="font-mainFont text-white font-[400] text-[1.2vw]"
                  >
                    {cur}
                  </label>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const CommonBTNsWrapper = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full overflow-hidden px-2">
        <button className="border border-secondaryColor text-secondaryColor font-mainFont font-[500] flex-1 py-2 rounded-s-full hover:bg-[#19cded] hover:text-white transition-all duration-150 ease-linear hover:border-[#19cded]">
          Helped Pain
        </button>
        <button className="border border-secondaryColor text-secondaryColor font-mainFont font-[500] flex-1 py-2 hover:bg-[#19cded] hover:text-white transition-all duration-150 ease-linear hover:border-[#19cded]">
          Worsened
        </button>
        <button className="border border-secondaryColor text-secondaryColor font-mainFont font-[500] flex-1 py-2 rounded-e-full hover:bg-[#19cded] hover:text-white transition-all duration-150 ease-linear hover:border-[#19cded]">
          No Change
        </button>
      </div>
    </>
  );
};
