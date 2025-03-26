import React, { useEffect, useState } from "react";
import ShoulderRedImg from "../assets/images/ShoulderRedImg.png";
import { useNavigate } from "react-router-dom";

export const Preview = () => {
  const [patientMedicationData, setPatientMedicationData] = useState("");
  const router = useNavigate();
  useEffect(() => {
    const getData = localStorage.getItem("patientMedicationInfo");
    if (!getData) {
      alert("No data found");
    }
    const result = JSON.parse(getData);
    setPatientMedicationData(result);
  }, []);
  return (
    <div className="min-h-[100dvh]">
      <div className="w-[70%] mx-auto">
        <h2 className="text-center my-5 text-[3dvw] font-[600] text-[#fff]">
          Preview Form
        </h2>
        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            1. Patient Particulars
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
              First Name - <strong>{patientMedicationData?.firstName}</strong>
            </h3>
            <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
              Last Name - <strong>{patientMedicationData?.lastName}</strong>
            </h3>
            <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
              Age - <strong>{patientMedicationData?.age}</strong>
            </h3>
            <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
              Height - <strong>{patientMedicationData?.height}</strong>
            </h3>
            <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
              Weight - <strong>{patientMedicationData?.weight}KG</strong>
            </h3>
          </div>
        </div>
        {patientMedicationData?.selectedPainArea?.length > 0 && (
          <div className="my-8">
            <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
              2. Select Pain Area
            </h2>
            <div className="px-5 flex flex-col gap-3">
              {patientMedicationData?.selectedPainArea?.map((cur, id) => (
                <div
                  key={id}
                  className=" flex justify-between items-start gap-3"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                      Selected Pain Area - <strong>{cur.title}</strong>
                    </h3>
                    <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                      Pain Intensity - <strong>{cur.painLevel}</strong>
                    </h3>
                  </div>
                  <div className="border border-[#0A1E44] p-4 rounded-xl">
                    <img
                      src={ShoulderRedImg}
                      alt="ShoulderRedImg"
                      className="h-[15dvw] w-[15dvw]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            3. Origin of the pain
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Approximately when the pain did begin? -{" "}
                  <strong>{patientMedicationData?.whenPainBegin}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  What caused current pain episode? -{" "}
                  <strong>{patientMedicationData?.currentPainEpisode}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  How did your current pain episode begin? -{" "}
                  <strong>
                    {patientMedicationData?.currentPainEpisodeBegin}
                  </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            4. Pain Characteristics
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Since your pain began how has it changed? -{" "}
                  <strong>{patientMedicationData?.painBeganHowChanged}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Check all of the following that describe your pain -{" "}
                  <strong>{patientMedicationData.describeYourPain}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  When is your pain at its worst? -{" "}
                  <strong>{patientMedicationData?.painWrostTime}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  How often does the pain occur? -{" "}
                  <strong>{patientMedicationData?.painOccurs}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            5. Aggravating and reliving factors for pain
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Changes in Weather -{" "}
                  <strong>{patientMedicationData?.changesInWeather}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Driving - <strong>{patientMedicationData?.driving}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Lifting Objects -{" "}
                  <strong>{patientMedicationData.liftingObjects}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Standing - <strong>{patientMedicationData?.standing}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Climbing Stairs -{" "}
                  <strong>{patientMedicationData?.climbingStairs}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Rising From Sitting -{" "}
                  <strong>{patientMedicationData?.risingFromSitting}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Walking - <strong>{patientMedicationData?.walking}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Coughing/Sneezing -{" "}
                  <strong>{patientMedicationData?.coughingSneezing}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Sitting - <strong>{patientMedicationData?.sitting}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            6. Associated Symptoms
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Numbness tingling -{" "}
                  <strong>{patientMedicationData?.numbnessTingling}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Weakness in Neck -{" "}
                  <strong>{patientMedicationData?.weaknessInNeck}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Weakness In Legs -{" "}
                  <strong>{patientMedicationData.weaknessInLegs}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Joint Swelling/Stiffness -{" "}
                  <strong>
                    {patientMedicationData?.joinSwellingStiffness}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Fever Chills -{" "}
                  <strong>{patientMedicationData?.feverChills}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Morning Stiffness in back -{" "}
                  <strong>
                    {patientMedicationData?.morningStiffnessInBack}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Loss of Bladder Control -{" "}
                  <strong>{patientMedicationData?.lossOfBladderControl}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Loss of bowel Control -{" "}
                  <strong>{patientMedicationData?.lossOfBowelControl}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Balance Related Problems -{" "}
                  <strong>
                    {patientMedicationData?.balanceRelatedProblems}
                  </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            7. Disability due to pain
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  How much time can you stand in one location due to pain? -{" "}
                  <strong>
                    {patientMedicationData?.timeYouCanStandInOneLocation}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  How much time can you walk without pain? -{" "}
                  <strong>
                    {patientMedicationData?.timeYouCanWalkWithoutPain}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Is your walking limited due to pain? -{" "}
                  <strong>{patientMedicationData.isWalkingLimited}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            8. Functional Scoring
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 1 : Pain Intensity -{" "}
                  <strong>{patientMedicationData?.painIntensity}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 2 : Personal Care -{" "}
                  <strong>{patientMedicationData?.personalCare}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 3 : Social Life -{" "}
                  <strong>{patientMedicationData.socialLife}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 4 : Travelling -{" "}
                  <strong>{patientMedicationData.travelling}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 5 : Employment/Homemaking -{" "}
                  <strong>{patientMedicationData.employmentHomemaking}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 6 : Sitting -{" "}
                  <strong>{patientMedicationData.sittingInFS}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 7 : Standing -{" "}
                  <strong>{patientMedicationData.standingInFS}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 8 : Sleeping -{" "}
                  <strong>{patientMedicationData.sleepingInFS}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 9 : Lifting -{" "}
                  <strong>{patientMedicationData.liftingInFS}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Section 10 : Walking -{" "}
                  <strong>{patientMedicationData.walkingInFS}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {patientMedicationData?.medicationForPainList?.length > 0 && (
          <div className="my-8">
            <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
              9. Medications for pain
            </h2>
            <div className="px-5 flex flex-col gap-3">
              <div className=" flex justify-start items-start gap-3">
                {patientMedicationData?.medicationForPainList?.map(
                  (cur, id) => (
                    <div
                      key={id}
                      className="border border-gray-200 bg-white shadow-md p-5 rounded-xl flex flex-col gap-4 min-w-[20dvw]"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-[1.2dvw] font-[700] text-[#000]">
                          Mediacation {id + 1}
                        </h3>
                        {/* <button
                onClick={() => handleDelete(id)}
                className="ml-auto p-2 flex justify-center items-center hover:text-white hover:bg-red-400 transition-all duration-200 ease-linear rounded-full shadow-lg"
              >
                <Trash size={15} />
              </button> */}
                      </div>
                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                        <strong>Medication</strong> :{" "}
                        <span className="font-[400] text-black text-[1.2dvw]">
                          {cur?.medication}
                        </span>
                      </h3>
                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#00]/70">
                        <strong>Dosage</strong> :{" "}
                        <span className="font-[400] text-black text-[1.2dvw]">
                          {cur?.dosage}
                        </span>
                      </h3>
                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                        <strong>Frequency</strong> :{" "}
                        <span className="font-[400] text-black text-[1.2dvw]">
                          {cur?.frequency}
                        </span>
                      </h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            10. Pain Treatment History
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Spine Surgery -{" "}
                  <strong>{patientMedicationData?.spineSurgery}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Psychological Therapy -{" "}
                  <strong>{patientMedicationData?.psychologicalTherapy}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Hot/Cold Packs -{" "}
                  <strong>{patientMedicationData.hotColdPack}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  TENS Unit - <strong>{patientMedicationData?.tensUnit}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Physical Therapy -{" "}
                  <strong>{patientMedicationData.physicalTherapy}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Branch Support -{" "}
                  <strong>{patientMedicationData.branchSupport}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Massage Therapy -{" "}
                  <strong>{patientMedicationData.massageTherapy}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Spinal Cord Stimulator Trial -{" "}
                  <strong>{patientMedicationData.spinalCordStimulator}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Chiropractic Care -{" "}
                  <strong>{patientMedicationData.chiropracticCare}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Acupuncture -{" "}
                  <strong>{patientMedicationData.acupuncture}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Medication -{" "}
                  <strong>{patientMedicationData.medication}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Spinal Cord Stimulator Implant -{" "}
                  <strong>
                    {patientMedicationData.spinalCordStimulatorImplant}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Is your walking limited due to pain? -{" "}
                  <strong>{patientMedicationData.limitedForPain}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Did this therapy help? -{" "}
                  <strong>{patientMedicationData.isTherapyhelp}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  PAST SURGICAL HISTORY -{" "}
                  <strong>{patientMedicationData.pastSurgicalHistory}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Do you do any special exercises for your back or neck? -{" "}
                  <strong>{patientMedicationData?.specialExercisesName}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {patientMedicationData?.pastMedicationInfo?.length > 0 && (
          <div className="my-8">
            <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
              11. Pain Treatment History
            </h2>
            <div className="px-5 flex flex-col gap-3">
              <div className=" flex justify-start items-start gap-3">
                {patientMedicationData?.pastMedicationInfo?.map((cur, id) => (
                  <div
                    key={id}
                    className="border border-gray-200 bg-white shadow-md  p-5 rounded-xl flex flex-col gap-4 max-w-[20dvw]"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-[1.2dvw] font-[700] text-[#000]">
                        Mediacation {id + 1}
                      </h3>
                      {/* <button
                  onClick={() => handleDelete(id)}
                  className="ml-auto p-2 flex justify-center items-center hover:text-white hover:bg-red-400 transition-all duration-200 ease-linear rounded-full shadow-lg"
                >
                  <Trash size={15} />
                </button> */}
                    </div>
                    <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                      <strong>Medication</strong> :{" "}
                      <span className="font-[400] text-black text-[1.2dvw]">
                        {cur?.medication}
                      </span>
                    </h3>
                    <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                      <strong>Region</strong> :{" "}
                      <span className="font-[400] text-black text-[1.2dvw]">
                        {cur?.region}
                      </span>
                    </h3>
                    <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                      <strong>No.of Procedure Last Year</strong> :{" "}
                      <span className="font-[400] text-black text-[1.2dvw]">
                        {cur?.procedureLastYear}
                      </span>
                    </h3>
                    <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                      <strong>Date of Last Procedure</strong> :{" "}
                      <span className="text-black font-[400] text-[1.2dvw]">
                        {cur?.lastProcedureData}
                      </span>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {patientMedicationData?.currentMedicationInfo?.length > 0 && (
          <div className="my-8">
            <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
              12. Current Medications
            </h2>
            <div className="px-5 flex flex-col gap-3">
              <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                Are you currently taking any blood thinners or anti- coagulants?
                - <strong>{patientMedicationData?.takingBloodThinner}</strong>
              </h3>
              <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                If YES, which ones? -{" "}
                <strong>{patientMedicationData?.nameBloodThinner}</strong>
              </h3>
              <div className=" flex justify-start items-start gap-3">
                {patientMedicationData?.currentMedicationInfo?.map(
                  (cur, id) => (
                    <div
                      key={id}
                      className="border border-gray-200 bg-white shadow-md  p-5 rounded-xl flex flex-col gap-4 max-w-[20dvw]"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-[1.2dvw] font-[700] text-[#000]">
                          Mediacation {id + 1}
                        </h3>
                      </div>
                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                        <strong>Medication</strong> :{" "}
                        <span className="font-[400] text-black text-[1.2dvw]">
                          {cur?.medication}
                        </span>
                      </h3>
                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                        <strong>Dosage</strong> :{" "}
                        <span className="font-[400] text-black text-[1.2dvw]">
                          {cur?.dosage}
                        </span>
                      </h3>

                      <h3 className="text-[1dvw] font-[500] font-mainFont text-[#000]/70">
                        <strong>Frequency</strong> :{" "}
                        <span className="text-black font-[400] text-[1.2dvw]">
                          {cur?.frequency}
                        </span>
                      </h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            13. Past Medical History
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  1. Cancer -{" "}
                  <strong>{patientMedicationData?.cancerType}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  2. Diabetes -{" "}
                  <strong>{patientMedicationData?.diabetesType}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Controlled? -{" "}
                  <strong>{patientMedicationData.diabetesControlled}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Blood Sugar Average weekly -{" "}
                  <strong>{patientMedicationData?.bloodSugarWeekly}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Last Hb A1c - <strong>{patientMedicationData.HBALC}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Any Diabetes related comorbidity -{" "}
                  <strong>{patientMedicationData.diabetesComorbidity}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            14. Past Medical History
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Do you have any drug/medication allergies? -{" "}
                  <strong>{patientMedicationData?.medicationAllergies}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Cardiovascular/Hematologic -{" "}
                  <strong>
                    {patientMedicationData?.cardiovascularHematologic}
                  </strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Respiratory -{" "}
                  <strong>{patientMedicationData.respiratory}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Cardiovascular/Hematologic -{" "}
                  <strong>
                    {patientMedicationData?.cardiovascularHematologic2}
                  </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            15. Review of systems for today
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Constitutional -{" "}
                  <strong>{patientMedicationData?.constitutional}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Ears/Nose/Throat/Neck -{" "}
                  <strong>{patientMedicationData?.ENT}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Cardiovascular -{" "}
                  <strong>{patientMedicationData.cardiovascular}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Eyes - <strong>{patientMedicationData?.eyes}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="font-[600] text-[1.4dvw] my-4 text-white/80">
            16. Social History
          </h2>
          <div className="px-5 flex flex-col gap-3">
            <div className=" flex justify-between items-start gap-3">
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Relationship Status -{" "}
                  <strong>{patientMedicationData?.relationshipStatus}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Number of Children, if any -{" "}
                  <strong>{patientMedicationData?.NoOfChildrens}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Occupation -{" "}
                  <strong>{patientMedicationData.occupation}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  When was the last time you worked? -{" "}
                  <strong>{patientMedicationData?.lastTimeWorked}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Who is in your current household? -{" "}
                  <strong>{patientMedicationData?.currentHousehold}</strong>
                </h3>
                <h3 className="text-[1.2dvw] font-[500] text-[#fff]">
                  Are there any stairs in your current home? -{" "}
                  <strong>{patientMedicationData?.stairsInHouse}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => router("/")}
          type="button"
          className="flex justify-center items-center gap-3 shadowBTNs btnGraiden bg-[#DB9A31] text-baseColor px-12 py-2 rounded-full font-mainFont font-[500] text-[1.1vw]   transition-all duration-150 ease-linear border border-[#DB9A31] forSvg place-content-center ml-auto my-5"
        >
          Go To Portal
        </button>
      </div>
    </div>
  );
};
