import React, { useState } from "react";

export const PainHistory4 = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const selectedFile = files[0]; // Get the first file

    setPatientMedicationInfo((prev) => ({
      ...prev,
      [name]: selectedFile,
    }));
  };

  console.log(patientMedicationInfo);

  return (
    <div className="px-4 py-3 mb-5">
      <div className="w-full">
        <div class="relative overflow-x-auto">
          {/* <table class="w-full text-sm text-left rtl:text-right   font-mainFont">
            <thead class="text-xs  uppercase   text-black border-t  border-[#BDC3C7]">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 font-[600] text-[1.1vw] border-l border-r border-[#BDC3C7]"
                >
                  Investigation
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[1.1vw]">
                  Region
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 border-l border-r border-[#BDC3C7] font-[600] text-[1.1vw]"
                >
                  Recent Dates
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 font-[600] border-r border-[#BDC3C7] text-[1.1vw]"
                >
                  Upload Dicom Files
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">MRI</p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>

              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">CT SCAN</p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">X-RAYS</p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">EMG-NCV</p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">
                    Vascular studies
                  </p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">
                    DEXA scan
                  </p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">
                    Myelogram
                  </p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">
                    Discogram
                  </p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
              <tr class="bg-white text-black border-b   ">
                <th
                  scope="row"
                  class="font-medium text-black whitespace-nowrap border border-[#BDC3C7] px-5"
                >
                  <p className="font-mainFont font-[400] text-[1vw]">
                    PET Scan
                  </p>
                </th>
                <td class=" border border-[#BDC3C7] w-72">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Region"
                  />
                </td>
                <td class=" border border-[#BDC3C7] text-[#34495E] font-[400] font-[Poppins] p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="datetime-local"
                  />
                </td>
                <td class=" border border-[#BDC3C7] flex flex-col justify-center items-center gap-1 p-2">
                  <input
                    className="w-full px-3 py-4 border border-none outline-none"
                    placeholder="Enter Period taken"
                    type="file"
                  />
                </td>
              </tr>
            </tbody>
          </table> */}

          <div className="w-full">
            <div className="flex justify-center items-center w-full">
              <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                <h3 className="text-[#fff] font-[600] text-[1.4dvw] text-start">
                  Investigation
                </h3>
              </div>
              <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                <h3 className="text-[#fff] font-[600] text-[1.4dvw] text-start">
                  Region
                </h3>
              </div>
              <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                <h3 className="text-[#fff] font-[600] text-[1.4dvw] text-start">
                  Recent Dates
                </h3>
              </div>

              <div className="flex-1 max-w-[15dvw]  py-4 px-3">
                <h3 className="text-[#fff] font-[600] text-[1.4dvw] text-start">
                  Upload Files
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full mt-4">
              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">MRI</h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="MRI_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">CT SCAN</h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="CT_SCAN_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">X-RAYS</h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="X_RAYS_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">EMG-NCV</h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="EMG_NCV_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">
                    Vascular studies
                  </h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="VASCULAR_STUDIES_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">
                    DEXA scan
                  </h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="DEXA_SCAN_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">
                    Myelogram
                  </h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="MYELOGRAM_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">
                    Discogram
                  </h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="DISCOGRAM_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                  <h3 className="text-black font-[500] text-[1dvw]">
                    PET Scan
                  </h3>
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                  <input
                    placeholder="Enter Region"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                  />
                </div>
                <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD] rounded-e-full">
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                    placeholder="Enter Treatment"
                  />
                </div>

                {/* <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
                    <select className="bg-transparent border-none outline-none focus:border-none active:border-none w-full">
                      <option>Select</option>
                      <option>Pain relief 1</option>
                      <option>Pain relief 2</option>
                      <option>Pain relief 3</option>
                      <option>Pain relief 4</option>
                    </select>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD] rounded-e-full">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      type="date"
                    />
                  </div> */}

                <div className="flex-1  px-3 max-w-[15dvw]  ">
                  {/* <button
                    onClick={() => inputFileRef.current.click()}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  >
                    <span>
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.49935 0.333984L5.57735 0.338651C5.72616 0.3562 5.86472 0.423371 5.97067 0.529325C6.07663 0.63528 6.1438 0.77384 6.16135 0.922651L6.16602 1.00065V3.66732L6.16935 3.76732C6.19321 4.08477 6.32985 4.3832 6.55459 4.60867C6.77932 4.83414 7.07731 4.97176 7.39468 4.99665L7.49935 5.00065H10.166L10.244 5.00532C10.3928 5.02287 10.5314 5.09004 10.6373 5.19599C10.7433 5.30195 10.8105 5.44051 10.828 5.58932L10.8327 5.66732V11.6673C10.8327 12.1775 10.6378 12.6683 10.2878 13.0395C9.93785 13.4107 9.45928 13.6341 8.95002 13.664L8.83268 13.6673H2.16602C1.65588 13.6673 1.16501 13.4724 0.793842 13.1225C0.422678 12.7725 0.199277 12.2939 0.169349 11.7847L0.166016 11.6673V2.33398C0.165987 1.82384 0.360899 1.33297 0.710871 0.96181C1.06084 0.590646 1.53942 0.367246 2.04868 0.337318L2.16602 0.333984H5.49935Z"
                          fill="#FBFBFB"
                        />
                        <path
                          d="M10.1654 3.66733H7.49871L7.49805 1L10.1654 3.66733Z"
                          fill="#FBFBFB"
                        />
                      </svg>
                    </span>
                    Upload File <input ref={inputFileRef} type="file" hidden />
                  </button> */}
                  <input
                    type="file"
                    name="PET_SCAN_FILE"
                    onChange={handleFileChange}
                    className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h3 className="font-mainFont font-[600] text-white text-[1.1vw]">
            Other Diagnostic Testing
          </h3>
          <div className="flex justify-start w-[50%] my-3 gap-3">
            <div className="flex-1">
              <input
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter Other Diagnostic Testing"
              />
            </div>
            <div className="flex-1">
              <input
                className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                placeholder="Enter Date"
              />
            </div>
          </div>
          <div className="w-[70%]">
            <div className="flex justify-start items-center gap-3">
              <input type="radio" id="pain1" />
              <label
                htmlFor="pain1"
                className="font-mainFont font-[400] text-[.9vw] text-white"
              >
                I have not had ANY diagnostic tests for my current pain
                complaint
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
