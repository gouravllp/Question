import { Trash } from "lucide-react";
import React, { useState } from "react";

export const MedicationForPain = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [addMedication, setAddMedication] = useState(1);
  const [currentMedication, setCurrentMedication] = useState(0);
  const [addedMedication, setAddedMedication] = useState([]);
  const [medicationInfo, setMedicationInfo] = useState({
    medication: "",
    dosage: "",
    frequency: "",
    taken: "",
  });

  const allMedications = [
    {
      id: 1,
      title: "Add Medication Info",
    },
    {
      id: 2,
      title: "Medication",
    },
    {
      id: 3,
      title: "Dose",
    },
    {
      id: 4,
      title: "Frequency",
    },
    {
      id: 5,
      title: "Period Approx. Taken",
    },
  ];

  const handleNext = () => {
    if (currentMedication < allMedications.length) {
      setCurrentMedication((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMedication >= 1) {
      setCurrentMedication((prev) => prev - 1);
    }
  };

  const renderCurrentMedication = () => {
    switch (currentMedication) {
      case 0:
        return (
          <>
            <button
              type="button"
              onClick={handleNext}
              className=" rounded-full btnGraiden bg-[#317BDB] shadowBTNs  text-white font-mainFont font-[500] min-w-[15%] py-3 px-6 text-[1vw] mt-[2%]"
            >
              {allMedications[currentMedication].title} +
            </button>
          </>
        );
        break;
      case 1:
        return (
          <>
            <div className="flex flex-col justify-center items-center gap-4 my-3 w-[30%]">
              <label className="text-[#333333] font-mainFont font-[600] text-center text-[1.1vw]">
                {allMedications[currentMedication].title}
              </label>
              <input
                className="w-full py-3 rounded-full font-mainFont placeholder:font-[400] font-[500] px-4 border border-[#CDCDCD] bg-[#F8F8F8] inputShadow focus:ring-none outline-none"
                placeholder="Enter Medicine Name"
                type="text"
              />
            </div>
            <div className="w-[30%] flex justify-around items-center ">
              <button
                type="button"
                onClick={handlePrevious}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Next
              </button>
            </div>
          </>
        );
        break;

      case 2:
        return (
          <>
            <div className="flex flex-col justify-center items-center gap-4 my-3 w-[30%]">
              <label className="text-[#333333] font-mainFont font-[600] text-center text-[1.1vw]">
                {allMedications[currentMedication].title}
              </label>
              <input
                className="w-full py-3 rounded-full font-mainFont placeholder:font-[400] font-[500] px-4 border border-[#CDCDCD] bg-[#F8F8F8] inputShadow focus:ring-none outline-none"
                placeholder="Enter Dosage"
                type="number"
              />
            </div>
            <div className="w-[30%] flex justify-around items-center ">
              <button
                type="button"
                onClick={handlePrevious}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Next
              </button>
            </div>
          </>
        );
        break;
      case 3:
        return (
          <>
            <div className="flex flex-col justify-center items-center gap-4 my-3 w-[30%]">
              <label className="text-[#333333] font-mainFont font-[600] text-center text-[1.1vw]">
                {allMedications[currentMedication].title}
              </label>
              <input
                className="w-full py-3 rounded-full font-mainFont placeholder:font-[400] font-[500] px-4 border border-[#CDCDCD] bg-[#F8F8F8] inputShadow focus:ring-none outline-none"
                placeholder="Enter Times/Day"
                type="number"
              />
            </div>
            <div className="w-[30%] flex justify-around items-center ">
              <button
                type="button"
                onClick={handlePrevious}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Next
              </button>
            </div>
          </>
        );
        break;
      case 4:
        return (
          <>
            <div className="flex flex-col justify-center items-center gap-4 my-3 w-[30%]">
              <label className="text-[#333333] font-mainFont font-[600] text-center text-[1.1vw]">
                {allMedications[currentMedication].title}
              </label>
              <input
                className="w-full py-3 rounded-full font-mainFont placeholder:font-[400] font-[500] px-4 border border-[#CDCDCD] bg-[#F8F8F8] inputShadow focus:ring-none outline-none"
                placeholder="Enter Period taken"
                type="number"
              />
            </div>
            <div className="w-[30%] flex justify-around items-center ">
              <button
                type="button"
                onClick={handlePrevious}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Previous
              </button>
              {/* <button
                type="button"
                onClick={handleNext}
                className=" rounded-full btnGraiden bg-[#333333] shadowBTNs  text-white font-mainFont font-[500] min-w-[30%] py-3 px-6 text-[1vw] mt-[2%]"
              >
                Next
              </button> */}
            </div>
          </>
        );
        break;

      default:
        return (
          <>
            <button
              type="button"
              onClick={() => setAddMedication(() => addMedication + 1)}
              className=" rounded-full btnGraiden bg-[#317BDB] shadowBTNs  text-white font-mainFont font-[500] min-w-[15%] py-3 px-6 text-[1vw] mt-[2%]"
            >
              {allMedications[currentMedication].title} +
            </button>
          </>
        );
        break;
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMedicationInfo({ ...medicationInfo, [name]: value });
  };

  const handleDelete = (id) => {
    setAddedMedication((preData) => {
      // Ensure preData is an array
      const safePreData = Array.isArray(preData) ? preData : [];

      // For array of objects
      return safePreData.filter((item, index) => index !== id);
    });
  };

  return (
    <div className="px-4 py-3 mb-5 ">
      <div className="w-full">
        <div class="relative overflow-x-auto flex justify-center items-center flex-col">
          <div className="w-full mb-6">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right   font-mainFont bg-white">
                <thead class="text-xs  uppercase   text-black border-t  border-[#0A1E44]">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 font-[600] border-l border-r border-[#BDC3C7]"
                    >
                      Medication
                    </th>
                    <th scope="col" class="px-6 py-3 font-[600]">
                      Dosage
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 border-l border-r border-[#BDC3C7] font-[600]"
                    >
                      Frequency
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 border-l border-r border-[#BDC3C7] font-[600]"
                    >
                      Period Approx. Taken
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Array(addMedication)
                    .join()
                    .split(",")
                    .map((cur, id) => (
                      <tr key={id} class="bg-white text-black border-b   ">
                        <th
                          scope="row"
                          class="font-medium text-black whitespace-nowrap border border-[#BDC3C7]"
                        >
                          <input
                            className="w-full px-3 py-4 border border-none outline-none"
                            placeholder="VERTEBROPLASTY/KYPHOPLASTY"
                            name="medication"
                            value={medicationInfo.medication}
                            onChange={handleOnChange}
                          />
                        </th>
                        <td class=" border border-[#BDC3C7]">
                          <input
                            className="w-full px-3 py-4 border border-none outline-none"
                            placeholder="Enter Dose Amount"
                            type="number"
                            name="dosage"
                            value={medicationInfo.dosage}
                            onChange={handleOnChange}
                          />
                        </td>
                        <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                          <select
                            onChange={handleOnChange}
                            name="frequency"
                            value={medicationInfo.frequency}
                            className="w-full"
                          >
                            <option>select</option>
                            <option value="frequency 1">Frequency 1</option>
                            <option value="frequency 2">Frequency 2</option>
                            <option value="frequency 3">Frequency 3</option>
                            <option value="frequency 4">Frequency 4</option>
                          </select>
                        </td>
                        <td class=" border border-[#BDC3C7]">
                          <input
                            className="w-full px-3 py-4 border border-none outline-none"
                            placeholder="Enter Period taken"
                            type="number"
                            name="taken"
                            value={medicationInfo.taken}
                            onChange={handleOnChange}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={() => {
                  setAddMedication(() => addMedication + 0);
                  setAddedMedication([...addedMedication, medicationInfo]);

                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    medicationForPainList: [
                      ...patientMedicationInfo?.medicationForPainList,
                      medicationInfo,
                    ],
                  });
                  setMedicationInfo({
                    medication: "",
                    dosage: "",
                    frequency: "",
                    taken: "",
                  });
                }}
                className="bg-secondaryColo btnGraident btnGraident  text-white font-mainFont font-[500] w-full py-3 text-[1.1vw]"
              >
                {" "}
                Add More
              </button>
            </div>
          </div>

          <div className=" flex justify-start w-full  gap-5 flex-wrap my-5">
            {addedMedication.map((curMedication, id) => (
              <div
                key={id}
                className="border border-gray-200 bg-white shadow-md p-5 rounded-xl flex flex-col gap-4 min-w-[20dvw]"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[1.2dvw] font-[700] text-[#333333]">
                    Mediacation {id + 1}
                  </h3>
                  <button
                    onClick={() => handleDelete(id)}
                    className="ml-auto p-2 flex justify-center items-center hover:text-white hover:bg-red-400 transition-all duration-200 ease-linear rounded-full shadow-lg"
                  >
                    <Trash size={15} />
                  </button>
                </div>
                <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                  <strong>Medication</strong> :{" "}
                  <span className="font-[400] text-black text-[1.2dvw]">
                    {curMedication?.medication}
                  </span>
                </h3>
                <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                  <strong>Dosage</strong> :{" "}
                  <span className="font-[400] text-black text-[1.2dvw]">
                    {curMedication?.dosage}
                  </span>
                </h3>
                <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                  <strong>Frequency</strong> :{" "}
                  <span className="font-[400] text-black text-[1.2dvw]">
                    {curMedication?.frequency}
                  </span>
                </h3>
                <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                  <strong>Period Approx. Taken</strong> :{" "}
                  <span className="text-black font-[400] text-[1.2dvw]">
                    {curMedication?.taken}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
