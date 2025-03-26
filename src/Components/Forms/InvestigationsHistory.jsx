import React, { useRef } from "react";

export const InvestigationsHistory = ({
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const inputFileRef = useRef(null);
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const selectedFile = files[0]; // Get the first file

    setPatientMedicationInfo((prev) => ({
      ...prev,
      [name]: selectedFile,
    }));
  };

  return (
    <>
      <div className="px-4 py-3 mb-5">
        <div className="w-full">
          <div class="relative overflow-x-auto">
            {/* <table class="w-full text-sm text-left rtl:text-right   font-mainFont">
              <thead class="text-xs  uppercase   text-black ">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 font-[600] text-[1.1vw] "
                  >
                    Speciality
                  </th>
                  <th scope="col" class="px-6 py-3 font-[600] text-[1.1vw]">
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3  font-[600] text-[1.1vw]"
                  >
                    Treatments
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-[600]  text-[1.1vw]"
                  >
                    Pain relief?
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-[600]  text-[1.1vw]"
                  >
                    Last Dates
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-[600]  text-[1.1vw]"
                  >
                    Upload Files
                  </th>
                </tr>
              </thead>

              <tbody className="flex flex-col w-full">
                <tr class=" text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium bg-white text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Acupuncturist
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-5 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Neurosurgeon
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Chiropractor
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Orthopedic Surgeon
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Rheumatologist
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Internist
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full rounded-2xl mt-5">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Physical Therapist
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="file"
                    />
                  </td>
                </tr>

                <tr class="bg-white text-black    w-full">
                  <th
                    scope="row"
                    class="font-medium text-black whitespace-nowrap  px-5"
                  >
                    <p className="font-mainFont font-[400] text-[1vw]">
                      Neurologist
                    </p>
                  </th>

                  <td class="  w-64">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Name"
                    />
                  </td>

                  <td class="  ">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Treatment"
                    />
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2 w-48">
                    <select className="w-full px-3 py-4 border border-none outline-none">
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                    </select>
                  </td>

                  <td class="  text-[#34495E] font-[400] font-[Poppins] p-2">
                    <input
                      className="w-full px-3 py-4 border border-none outline-none"
                      placeholder="Enter Period taken"
                      type="datetime-local"
                    />
                  </td>

                  <td class="w-64    flex flex-col justify-center items-center gap-1 p-2">
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
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Speciality
                  </h3>
                </div>
                <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Name
                  </h3>
                </div>
                <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Treatments
                  </h3>
                </div>
                <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Pain relief?
                  </h3>
                </div>
                <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Last Dates
                  </h3>
                </div>
                <div className="flex-1 min-w-[10dvw]  py-4 px-3">
                  <h3 className="text-white font-[600] text-[1.4dvw] text-start">
                    Upload Files
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full mt-4">
                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Acupuncturist
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}

                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="acupuncturist_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Neurosurgeon
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}

                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="neurosurgeon_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Chiropractor
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}

                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="chiropractor_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Orthopedic Surgeon
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}
                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="orthopedic_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Rheumatologist
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}
                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="rheumatologist_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Internist
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button>
                  </div> */}
                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="internist_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Physical Therapist
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}
                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="physical_FILE"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="py-4 px-3 min-w-[10dvw] bg-white flex-1 rounded-s-full border-2 border-[#CDCDCD]">
                    <h3 className="text-black font-[500] text-[1dvw]">
                      Neurologist
                    </h3>
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      placeholder="Enter Name"
                      className="bg-transparent border-none outline-none focus:border-none active:border-none  w-full"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] border-l-0 bg-white border-2 border-[#CDCDCD]">
                    <input
                      className="bg-transparent border-none outline-none focus:border-none active:border-none w-full"
                      placeholder="Enter Treatment"
                    />
                  </div>
                  <div className="flex-1 py-4 px-3 min-w-[10dvw] bg-white border-2 border-l-0 border-[#CDCDCD]">
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
                  </div>
                  <div className="flex-1  px-3 min-w-[10dvw]  ">
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
                      Upload File{" "}
                      <input type="file" ref={inputFileRef} hidden />
                    </button> */}
                    <input
                      type="file"
                      className="flex justify-center items-center w-full rounded-full btnGraident py-4 gap-3 text-white"
                      name="neurologist_FILE"
                      onChange={handleFileChange}
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
            <div className="flex justify-start w-full my-3 gap-3">
              <div className="flex-1 flex flex-col gap-3">
                <label className="font-mainFont font-[600] text-white text-[1vw]">
                  List the names of any previous pain management:
                </label>
                <input
                  className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                  placeholder="Enter the names of any previous pain management method"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <label className="font-mainFont font-[600] text-white text-[1vw]">
                  Physicians you have seen in the past:
                </label>
                <input
                  className=" w-full px-6 py-3 rounded-full border outline-none border-[#CDCDCD]/20 font-mainFont font-[500] text-[1vw] placeholder:text-[#333333]/50 text-mainColor bg-[#ffffff]"
                  placeholder="Enter the names of any previous Physicians"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
