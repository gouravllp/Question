import React, { useCallback, useRef, useState } from "react";
import { Navbar } from "../Components/Common/Navbar/Navbar";
import { ProgressBar } from "../Components/Common/UI/ProgressBar/ProgressBar";
import { PatientParticulars } from "../Components/Forms/PatientParticulars";
import { submitQuestionary } from "../API/question";
import {
  NextButton,
  PreviousButton,
} from "../Components/Common/UI/NavBtns/NavBtns";
import { PainLocation } from "../Components/Forms/PainLocation";
import { PainSeverity } from "../Components/Forms/PainSeverity";
import { OriginOfPain } from "../Components/Forms/OriginOfPain";
import { PainCharacteristics } from "../Components/Forms/PainCharacteristics";
import { Relivingfactors } from "../Components/Forms/Relivingfactors";
import { AssociatedSymptoms } from "../Components/Forms/AssociatedSymptoms";
import { DisabilityPain } from "../Components/Forms/DisabilityPain";
import { FunctionalScoring } from "../Components/Forms/FunctionalScoring";
import { MedicationForPain } from "../Components/Forms/MedicationForPain";
import { PainHistory } from "../Components/Forms/PainHistory";
import { PainHistory2 } from "../Components/Forms/PainHistory2";
import { PainHistory3 } from "../Components/Forms/PainHistory3";
import { PainHistory4 } from "../Components/Forms/PainHistory4";
import { InvestigationsHistory } from "../Components/Forms/InvestigationsHistory";
import { CurrentMedications } from "../Components/Forms/CurrentMedications";
import { PastMedicalHistory } from "../Components/Forms/PastMedicalHistory";
import { PastMedicalHistory2 } from "../Components/Forms/PastMedicalHistory2";
import { ReviewOfSystems } from "../Components/Forms/ReviewOfSystems";
import { SocialHistory } from "../Components/Forms/SocialHistory";

import { ChoosePainLevel } from "../Components/Forms/ChoosePainLevel";
import { useNavigate } from "react-router-dom";
import CellParttenBg from "../assets/images/CellPatternBg.png";

export const Homepage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const elementRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  const [selectedLoaction, setSelectedLocation] = useState([]);
  const [selectedLoactionMulti, setSelectedLocationMulti] = useState([]);
  const [selectedPainLocation, setSelectedPainLocation] = useState({
    painLocation: "",
    cameraPosition: [5, 10, 10],
    distance: 5.5,
  });
  const router = useNavigate();

  const [patientMedicationInfo, setPatientMedicationInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    height: "",
    weight: "",
    selectedPainArea: "",
    selectedPainIntensity: "",
    whenPainBegin: "",
    currentPainEpisode: "",
    currentPainEpisodeBegin: "",
    painBeganHowChanged: "",
    describeYourPain: "",
    painWrostTime: "",
    painOccurs: "",
    changesInWeather: "",
    driving: "",
    liftingObjects: "",
    standing: "",
    climbingStairs: "",
    risingFromSitting: "",
    walking: "",
    coughingSneezing: "",
    sitting: "",
    numbnessTingling: "",
    weaknessInNeck: "",
    weaknessInLegs: "",
    joinSwellingStiffness: "",
    feverChills: "",
    morningStiffnessInBack: "",
    lossOfBladderControl: "",
    lossOfBowelControl: "",
    balanceRelatedProblems: "",
    timeYouCanStandInOneLocation: "",
    timeYouCanWalkWithoutPain: "",
    isWalkingLimited: "",
    painIntensity: "",
    personalCare: "",
    socialLife: "",
    travelling: "",
    employmentHomemaking: "",
    sittingInFS: "",
    standingInFS: "",
    sleepingInFS: "",
    liftingInFS: "",
    walkingInFS: "",
    medicationForPainList: "",
    spineSurgery: "",
    psychologicalTherapy: "",
    hotColdPack: "",
    tensUnit: "",
    physicalTherapy: "",
    branchSupport: "",
    massageTherapy: "",
    spinalCordStimulator: "",
    chiropracticCare: "",
    acupuncture: "",
    medication: "",
    spinalCordStimulatorImplant: "",
    limitedForPain: "",
    isTherapyhelp: "",
    specialExercisesName: "",
    pastSurgicalHistory: "",
    pastMedicationInfo: "",
    investigationHistory: "",
    otherDiagnosticTesting: "",
    otherDiagnosticTestingDate: "",
    investigationHistory2: "",
    namePreviousPain: "",
    physiciansHaveSeen: "",
    takingBloodThinner: "",
    nameBloodThinner: "",
    currentMedicationInfo: "",
    cancerType: "",
    diabetesType: "",
    diabetesControlled: "",
    bloodSugarWeekly: "",
    HBALC: "",
    diabetesComorbidity: "",
    medicationAllergies: "",
    cardiovascularHematologic: "",
    respiratory: "",
    cardiovascularHematologic2: "",
    constitutional: "",
    ENT: "",
    cardiovascular: "",
    eyes: "",
    relationshipStatus: "",
    NoOfChildrens: "",
    occupation: "",
    lastTimeWorked: "",
    currentHousehold: "",
    stairsInHouse: "",
    MRI_FILE: null,
    CT_SCAN_FILE: null,
    X_RAYS_FILE: null,
    EMG_NCV_FILE: null,
    VASCULAR_STUDIES_FILE: null,
    DEXA_SCAN_FILE: null,
    MYELOGRAM_FILE: null,
    DISCOGRAM_FILE: null,
    PET_SCAN_FILE: null,
    acupuncturist_FILE: null,
    neurosurgeon_FILE: null,
    chiropractor_FILE: null,
    orthopedic_FILE: null,
    rheumatologist_FILE: null,
    internist_FILE: null,
    physical_FILE: null,
    neurologist_FILE: null,
  });

  const allForms = [
    {
      id: 1,
      title: `Enter Patient Particulars`,
      subtitle: `Please Enter patient Details`,
    },
    {
      id: 2,
      title: `Pain Location`,
      subtitle: `Point out or Select the area of pain.`,
    },
    {
      id: 3,
      title: `Choose Pain Level`,
      subtitle: `Select Your Preferred Intensity`,
    },
    {
      id: 4,
      title: `Origin of the pain`,
      subtitle: `Enter Details when did the pain began `,
    },
    {
      id: 5,
      title: `Pain Characteristics`,
      subtitle: `Enter Details About the characteristics of the Pain.`,
    },
    {
      id: 6,
      title: `Aggravating and reliving factors for pain `,
      subtitle: `Enter aggravating and reliving factors  of the Pain.`,
    },
    {
      id: 7,
      title: `Associated Symptoms`,
      subtitle: `Identify Related Symptoms.`,
    },
    {
      id: 8,
      title: `Disability due to pain`,
      subtitle: `Enter Disabilities caused because of the Pain.`,
    },
    {
      id: 9,
      title: `Functional Scoring`,
      subtitle: `Evaluate how your condition impacts daily activities with our functional scoring system. This assessment helps measure limitations in movement, strength, and overall functionality, providing valuable insights for treatment planning. Select the most accurate responses to ensure a precise evaluation of your functional abilities and progress over time.`,
    },
    {
      id: 10,
      title: `Medications for pain`,
      subtitle: `Enter Medication your are taking.`,
    },
    {
      id: 11,
      title: `Pain Treatment History`,
      subtitle: `Document your history of pain treatments, including medications, therapies, and interventions. Understanding what has worked—or hasn’t—helps guide better treatment decisions. Provide details on previous approaches, their effectiveness, and any side effects to ensure a personalized and effective pain management plan moving forward.`,
    },
    {
      id: 12,
      title: `Pain Treatment History`,
      subtitle: `Document your history of pain treatments, including medications, therapies, and interventions. Understanding what has worked—or hasn’t—helps guide better treatment decisions. Provide details on previous approaches, their effectiveness, and any side effects to ensure a personalized and effective pain management plan moving forward.`,
    },
    {
      id: 13,
      title: `Pain Treatment History`,
      subtitle: `Document your history of pain treatments, including medications, therapies, and interventions. Understanding what has worked—or hasn’t—helps guide better treatment decisions. Provide details on previous approaches, their effectiveness, and any side effects to ensure a personalized and effective pain management plan moving forward.`,
    },
    {
      id: 14,
      title: `Investigations History`,
      subtitle: `Review and document all medical investigations related to your condition, including X-rays, MRIs, blood tests, and other diagnostic procedures. Understanding your past test results helps in making informed decisions about future care and treatment. Provide details on findings and their impact on your diagnosis and treatment plan.`,
    },
    {
      id: 15,
      title: `Investigations History`,
      subtitle: `Review and document all medical investigations related to your condition, including X-rays, MRIs, blood tests, and other diagnostic procedures. Understanding your past test results helps in making informed decisions about future care and treatment. Provide details on findings and their impact on your diagnosis and treatment plan.`,
    },
    {
      id: 16,
      title: `Current Medications`,
      subtitle: `Document all medications you are currently taking, including prescriptions, over-the-counter drugs, and supplements. Providing accurate details about dosages and frequency helps ensure safe and effective treatment. This information is essential for avoiding drug interactions and optimizing your pain management plan`,
    },
    {
      id: 17,
      title: `Past Medical History`,
      subtitle: `Provide details of any past medical conditions, surgeries, or chronic illnesses that may impact your current health. Understanding your medical history helps in creating a more effective treatment plan and identifying potential risk factors related to your condition.`,
    },
    {
      id: 18,
      title: `Past Medical History`,
      subtitle: `Provide details of any past medical conditions, surgeries, or chronic illnesses that may impact your current health. Understanding your medical history helps in creating a more effective treatment plan and identifying potential risk factors related to your condition.`,
    },
    {
      id: 29,
      title: `Review of systems for today`,
      subtitle: `Evaluate your current health status by reviewing symptoms across different body systems. This helps identify any new or ongoing issues that may require attention. Providing a detailed overview ensures a comprehensive assessment and aids in accurate diagnosis and treatment planning.`,
    },
    {
      id: 20,
      title: `Social History`,
      subtitle: `Share details about your daily habits, occupation, living situation, and social support system. Factors such as smoking, alcohol use, physical activity, and stress levels can impact your overall well-being and treatment outcomes. Understanding your social history helps create a personalized and effective healthcare plan.`,
    },
  ];

  const handleNext = () => {
    if (currentStep < allForms.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep >= 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  //   render current form...
  const renderCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <PatientParticulars
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 1:
        return (
          <PainLocation
            setSelectedPainLocation={setSelectedPainLocation}
            elementRef={elementRef}
            setScreenshot={setScreenshot}
            setSelectedLocationMulti={setSelectedLocationMulti}
            selectedLoactionMulti={selectedLoactionMulti}
            screenshot={screenshot}
            selectedLoaction={selectedLoaction}
            setSelectedLocation={setSelectedLocation}
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 2:
        return (
          <ChoosePainLevel
            screenShotImg={screenshot}
            selectedPainLocation={selectedPainLocation}
            selectedLoactionMulti={selectedLoactionMulti}
            setSelectedLocationMulti={setSelectedLocationMulti}
            patientMedicationInfo={patientMedicationInfo}
            setPatientMedicationInfo={setPatientMedicationInfo}
          />
        );
      // case 3:
      //   return <PainSeverity selectedPainLocation={selectedPainLocation} />;
      case 3:
        return (
          <OriginOfPain
            selectedPainLocation={selectedPainLocation}
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 4:
        return (
          <PainCharacteristics
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 5:
        return (
          <Relivingfactors
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 6:
        return (
          <AssociatedSymptoms
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 7:
        return (
          <DisabilityPain
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 8:
        return (
          <FunctionalScoring
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 9:
        return (
          <MedicationForPain
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 10:
        return (
          <PainHistory
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 11:
        return (
          <PainHistory2
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 12:
        return (
          <PainHistory3
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 13:
        return (
          <PainHistory4
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 14:
        return (
          <InvestigationsHistory
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 15:
        return (
          <CurrentMedications
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 16:
        return (
          <PastMedicalHistory
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 17:
        return (
          <PastMedicalHistory2
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 18:
        return (
          <ReviewOfSystems
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
      case 19:
        return (
          <SocialHistory
            setPatientMedicationInfo={setPatientMedicationInfo}
            patientMedicationInfo={patientMedicationInfo}
          />
        );
    }
  };

  const handleOnClick = () => {
    const saveData = JSON.stringify(patientMedicationInfo);
    console.log(patientMedicationInfo, "patientMedicationInfo", saveData);
    localStorage.setItem("patientMedicationInfo", saveData);
    // return;

    submitQuestionary(patientMedicationInfo);
  };

  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto my-8 py-4 px-2 flex flex-col gap-5">
        <ProgressBar
          title={allForms[currentStep].title}
          subtitle={allForms[currentStep].subtitle}
          currentStep={currentStep}
          steps={allForms}
        />
      </div>
      <div className="gradientBg min-h-[100dvh]">
        <div className="w-[90%] mx-auto mb-8 py-4 px-2">
          <div className="bg-baseColo p-6 rounded-lg shadow-mds relative">
            {/* <div className="absolute top-0 -left-[20vw] w-[40%] h-full gradientBg" /> */}
            <div className="relative z-20">{renderCurrentForm()}</div>

            {/* the nav btns  */}
            <div className="flex justify-between items-center gap-10 mt-10">
              <PreviousButton
                handlePrevious={handlePrevious}
                disabled={currentStep <= 0 ? true : false}
              />
              {currentStep === allForms.length - 1 ? (
                <></>
              ) : (
                <>
                  <NextButton handleNext={handleNext} />
                </>
              )}
              {currentStep === allForms.length - 1 && (
                <button
                  onClick={handleOnClick}
                  type="button"
                  className="flex justify-center items-center gap-3 shadowBTNs btnGraiden bg-[#DB9A31] text-baseColor px-12 py-2 rounded-full font-mainFont font-[500] text-[1.1vw]   transition-all duration-150 ease-linear border border-[#DB9A31] forSvg place-content-center ml-auto my-5"
                >
                  Submit
                </button>
              )}
              <button
                // onClick={handleNext}
                onClick={handleOnClick}
                type="button"
                className="flex justify-center items-center gap-3 shadowBTNs btnGraident text-baseColor px-12 py-2 rounded-full font-mainFont font-[500] text-[1.1vw]   transition-all duration-150 ease-linear border border-[#ff7537] forSvg ml-auto"
              >
                Save / Exit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-0 right-0 z-0 min-h-[100dvw] w-auto">
        <img src={CellParttenBg} alt="CellParttenBg" className="object-cover h-full w-auto" />
      </div> */}
    </>
  );
};
