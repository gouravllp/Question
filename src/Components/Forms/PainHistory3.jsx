import { Trash } from "lucide-react";
import React, { useState } from "react";

export const PainHistory3 = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [addMedication, setAddMedication] = useState(1);
  const [addedMedication, setAddedMedication] = useState([]);
  const [medicationInfo, setMedicationInfo] = useState({
    medication: "",
    region: "",
    procedureLastYear: "",
    lastProcedureData: "",
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
    <div className="px-4 py-3 mb-5">
      <div className="w-full">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm bg-white text-left rtl:text-right   font-mainFont">
            <thead class="text-xs  uppercase   text-black border-t  border-[#BDC3C7]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 font-[600] text-[1.1vw] border-l border-r border-[#BDC3C7]"
                >
                  Interventional Pain Treatment History
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[1.1vw]">
                  Region
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-l border-r border-[#BDC3C7] font-[600] text-[1.1vw]"
                >
                  No.of Procedure Last Year
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 font-[600] border-r border-[#BDC3C7] text-[1.1vw]"
                >
                  Date of Last Procedure
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
                      class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                    >
                      <input
                        className="w-full px-3 py-4 border border-none outline-none"
                        placeholder="VERTEBROPLASTY/KYPHOPLASTY"
                        name="medication"
                        value={medicationInfo.medication}
                        onChange={handleOnChange}
                      />
                    </th>
                    <td class=" border border-[#BDC3C7] w-72">
                      <select
                        onChange={handleOnChange}
                        name="region"
                        value={medicationInfo.region}
                        className="w-full px-5 py-4 border border-none outline-none"
                      >
                        <option value="Pick">Pick</option>
                        <option value="Region-1">Region-1</option>
                        <option value="Region-2">Region-2</option>
                        <option value="Region-3">Region-3</option>
                        <option value="Region-4">Region-4</option>
                        <option value="Region-5">Region-5</option>
                        <option value="Region-6">Region-6</option>
                      </select>
                    </td>
                    <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins]">
                      <input
                        className="w-full px-3 py-4 border border-none outline-none"
                        placeholder="Pick"
                        type="number"
                        onChange={handleOnChange}
                        name="procedureLastYear"
                        value={medicationInfo.procedureLastYear}
                      />
                    </td>
                    <td class=" border border-[#BDC3C7] flex flex-col justify-start items-start gap-1">
                      <input
                        className="w-full px-3 py-4 border border-none outline-none"
                        placeholder="Enter Period taken"
                        type="date"
                        onChange={handleOnChange}
                        name="lastProcedureData"
                        value={medicationInfo.lastProcedureData}
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
              setMedicationInfo({
                medication: "",
                region: "",
                procedureLastYear: "",
                lastProcedureData: "",
              });
              setPatientMedicationInfo({
                ...patientMedicationInfo,
                pastMedicationInfo: [
                  ...patientMedicationInfo?.pastMedicationInfo,
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

        <div className=" flex justify-start w-full  gap-5 flex-wrap my-5">
          {addedMedication.map((curMedication, id) => (
            <div
              key={id}
              className="border border-gray-200 bg-white shadow-md  p-5 rounded-xl flex flex-col gap-4 max-w-[20dvw]"
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
                <strong>Region</strong> :{" "}
                <span className="font-[400] text-black text-[1.2dvw]">
                  {curMedication?.region}
                </span>
              </h3>
              <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                <strong>No.of Procedure Last Year</strong> :{" "}
                <span className="font-[400] text-black text-[1.2dvw]">
                  {curMedication?.procedureLastYear}
                </span>
              </h3>
              <h3 className="text-[1dvw] font-[500] font-mainFont text-[#333333]/70">
                <strong>Date of Last Procedure</strong> :{" "}
                <span className="text-black font-[400] text-[1.2dvw]">
                  {curMedication?.lastProcedureData}
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
