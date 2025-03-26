import React, { useState } from "react";

const listData = [
  {
    title: "Since your pain began how has it changed?",
    name: "painBeganHowChanged",
    options: ["Improved", "Worsened", "Stayed the same"],
  },
  {
    title: "Check all of the following that describe your pain",
    name: "describeYourPain",
    options: [
      "Dull/Aching",
      "Hot/Burning",
      "Shooting",
      "Cramping",
      "Numbness",
      "Spasming",
      "Throbbing",
      "Squeezing",
      "Tingling/Pins&Needles",
      "Tightness",
      "Stabbing/Sharp",
    ],
  },
  {
    title: "When is your pain at its worst?",
    name: "painWrostTime",
    options: ["Mornings", "Daytime", "Middle of the night", "Always the Same"],
  },
  {
    title: "How often does the pain occur?",
    name: "painOccurs",
    options: [
      "Constant",
      "Changes in severity but always present",
      "Intermittent",
    ],
  },
];

export const PainCharacteristics = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [selectePainCharacteristic, setSelectePainCharacteristic] = useState({
    howItBegan: "",
    decribePain: "",
    painWorst: "",
    painOccur: "",
  });
  const [openIndex, setOpenIndex] = useState(null);
  const [selectOptions, setSelectOptions] = useState([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, e.target.type);

    if (e.target.type === "checkbox") {
      setPatientMedicationInfo({
        ...patientMedicationInfo,
        [name]: [...patientMedicationInfo[name], value],
      });
    } else {
      setPatientMedicationInfo({
        ...patientMedicationInfo,
        [name]: value,
      });
    }
  };
  return (
    <>
      <div className="w-full flex justify-start items-center mb-5">
        <div className="w-[60%] p-3 flex flex-col gap-5">
          {listData.map((list, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={list.title}
              options={list.options}
              isOpen={openIndex === index}
              onToggle={handleToggle}
              name={list.name}
              selectePainCharacteristic={selectePainCharacteristic}
              handleOnChange={handleOnChange}
            />
          ))}
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
  selectePainCharacteristic,
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
                isOpen ? "text-[#fff]/80" : "text-[#fff]"
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
          <div className="p-6 bg-transparent flex flex-wrap items-center gap-4">
            {options.map((cur, id) => (
              <>
                <div
                  key={id}
                  className="flex flex-shrink-0 justify-start items-center gap-3 border border-[#0A1E44] py-2 px-5 rounded-full"
                >
                  <input
                    name={name}
                    value={cur}
                    type={
                      name === "describeYourPain" || name === "painWrostTime"
                        ? "checkbox"
                        : "radio"
                    }
                    id={`section${index + 1}_${id}`}
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor={`section${index + 1}_${id}`}
                    className="font-mainFont font-[400] text-white text-[1.2vw]"
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
