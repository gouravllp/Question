import { Trash } from "lucide-react";
import React, { useState } from "react";

export const CurrentMedications = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [currentMedicationInfo, setcurrentMedicationInfo] = useState({
    takeingBloodThiner: "",
    nameBloodThiner: "",
  });
  const [addMedication, setAddMedication] = useState(1);
  const [addedMedication, setAddedMedication] = useState([]);
  const [medicationInfo, setMedicationInfo] = useState({
    medication: "",
    dosage: "",
    frequency: "",
  });

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
    <>
      <div className="flex flex-col justify-start items-start gap-4 mb-5">
        <div className="my-2 flex flex-col gap-4 p-6 rounded-lg bg-whit shadow-md border border-[#0A1E44]">
          <p className="font-mainFont font-[600] text-[1.1vw] text-white">
            Are you currently taking any blood thinners or anti- coagulants?
          </p>
          <div className="flex justify-start items-center gap-4">
            <button
              onClick={() => {
                setcurrentMedicationInfo({
                  ...currentMedicationInfo,
                  takeingBloodThiner: "Yes",
                });
                setPatientMedicationInfo({
                  ...patientMedicationInfo,
                  takingBloodThinner: "Yes",
                });
              }}
              className={`text-[#333333] ${
                currentMedicationInfo.takeingBloodThiner === "Yes"
                  ? "text-white btnGraident"
                  : "text-black bg-white"
              }  px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper`}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setcurrentMedicationInfo({
                  ...currentMedicationInfo,
                  takeingBloodThiner: "No",
                });
                setPatientMedicationInfo({
                  ...patientMedicationInfo,
                  takingBloodThinner: "No",
                });
              }}
              className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                currentMedicationInfo.takeingBloodThiner === "No"
                  ? "text-white btnGraident"
                  : "text-black bg-white"
              }`}
            >
              No
            </button>
          </div>
        </div>
        {currentMedicationInfo.takeingBloodThiner === "Yes" && (
          <div className="my-2 flex flex-col gap-4 p-6 rounded-lg bg-whit  shadow-md">
            <p className="font-mainFont font-[600] text-[1.1vw] text-white">
              If YES, which ones?
            </p>
            <div className="flex justify-start items-center gap-4">
              <button
                onClick={() => {
                  setcurrentMedicationInfo({
                    ...currentMedicationInfo,
                    nameBloodThiner: "Aspirin",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    nameBloodThinner: "Aspirin",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  currentMedicationInfo.nameBloodThiner === "Aspirin"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Aspirin
              </button>
              <button
                onClick={() => {
                  setcurrentMedicationInfo({
                    ...currentMedicationInfo,
                    nameBloodThiner: "Plavix",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    nameBloodThinner: "Plavix",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  currentMedicationInfo.nameBloodThiner === "Plavix"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Plavix
              </button>
              <button
                onClick={() => {
                  setcurrentMedicationInfo({
                    ...currentMedicationInfo,
                    nameBloodThiner: "Coumadin",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    nameBloodThinner: "Coumadin",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  currentMedicationInfo.nameBloodThiner === "Coumadin"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Coumadin
              </button>
              <button
                onClick={() => {
                  setcurrentMedicationInfo({
                    ...currentMedicationInfo,
                    nameBloodThiner: "Xarelto",
                  });
                  setPatientMedicationInfo({
                    ...patientMedicationInfo,
                    nameBloodThinner: "Xarelto",
                  });
                }}
                className={`text-[#333333]   px-8 py-1 text-[1vw] font-mainFont font-[500] rounded-full  transition-all duration-200 ease-linear shadowsForMainWrapper ${
                  currentMedicationInfo.nameBloodThiner === "Xarelto"
                    ? "text-white btnGraident"
                    : "text-black bg-white"
                }`}
              >
                Xarelto
              </button>

              <div className="flex justify-start items-center gap-4">
                <input
                  className="w-full border border-[#cdcdcd] bg-[#ffffff] px-5 py-2 rounded-full outline-none text-[1vw] font-[400] font-mainFont  text-[#333333] placeholder:text-[#333333]"
                  placeholder="Enter Manually"
                  value={patientMedicationInfo?.nameBloodThinner}
                  name="nameBloodThinner"
                  onChange={(event) => {
                    setPatientMedicationInfo({
                      ...patientMedicationInfo,
                      nameBloodThinner: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full mb-6">
        <div class="relative overflow-x-auto">
          <table class="w-full bg-white text-sm text-left rtl:text-right   font-mainFont">
            <thead class="text-xs  uppercase   text-black border-t  border-[#BDC3C7]">
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

                {/* <th scope="col" class="px-6 py-3 font-[600]">
                  Period Approx. Taken
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-l border-r border-[#BDC3C7] font-[600]"
                >
                  CURRENTLY TAKING
                </th> */}
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
                        onChange={handleOnChange}
                        value={medicationInfo.dosage}
                        name="dosage"
                      />
                    </td>
                    <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                      <select
                        onChange={handleOnChange}
                        value={medicationInfo.frequency}
                        name="frequency"
                        className="w-full"
                      >
                        <option>select</option>
                        <option value="frequency 1">Frequency 1</option>
                        <option value="frequency 2">Frequency 2</option>
                        <option value="frequency 3">Frequency 3</option>
                        <option value="frequency 4">Frequency 4</option>
                      </select>
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
              setMedicationInfo({
                medication: "",
                dosage: "",
                frequency: "",
              });
              setPatientMedicationInfo({
                ...patientMedicationInfo,
                currentMedicationInfo: [
                  ...patientMedicationInfo.currentMedicationInfo,
                  medicationInfo,
                ],
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
          </div>
        ))}
      </div>
    </>
  );
};
