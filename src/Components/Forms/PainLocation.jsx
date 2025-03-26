import React, { useRef, useState } from "react";
import { MaleModel3D } from "../Common/MaleModel/MaleModel3D";
import { useAnimate } from "framer-motion";
import { title } from "framer-motion/client";

// default image...
import ArmSSimg from "../../assets/images/ArmSSImg.png";
import UpperBackSSimg from "../../assets/images/UpperBackSSImg.png";
import LowerBackSSimg from "../../assets/images/LowerBackSSImg.png";
import MidBackSSimg from "../../assets/images/MidBackSSImg.png";
import NeckSSimg from "../../assets/images/ScreenShortNeck.png";
import ShoulderSSimg from "../../assets/images/ShoulderSSImg.png";
import LegsSSimg from "../../assets/images/LegsSSImg.png";
import ThighSSimg from "../../assets/images/ThighSSImg.png";

export const PainLocation = ({
  setSelectedPainLocation,
  elementRef,
  setScreenshot,
  setSelectedLocationMulti,
  selectedLoactionMulti,
  screenshot,
  selectedLoaction,
  setSelectedLocation,
  setPatientMedicationInfo,
  patientMedicationInfo,
}) => {
  const [takeScreenShort, setTakeScreenShort] = useState("");
  const [scope, animate] = useAnimate();
  const [currentPainLocationChoosen, setCuurentPainLocationChoosen] = useState({
    title: "",
    cameraPosition: [5, 10, 10],
    distance: 5.5,
    locationTitle: "",
    width: "",
    height: "",
    top: "",
    left: "",
  });

  const allPainLocation = [
    {
      title: "Neck",
      cameraPosition: [-5, 600, -140],
      distance: 2.7,

      width: "30vw",
      height: "10vw",
      top: "-2vw",
      left: "-20%",
    },
    {
      title: "Lower Back",
      cameraPosition: [-2, 50, -100],
      distance: 1.8,

      width: "30vw",
      height: "10vw",
      top: "-2vw",
      left: "-20%",
    },
    {
      title: "Mid Back",
      cameraPosition: [0, 45, -50],
      distance: 2.8,
      width: "30vw",
      height: "12vw",
      top: "-2vw",
      left: "-20%",
    },
    {
      title: "Upper Back",
      cameraPosition: [0, 70, -40],
      distance: 3.5,
      width: "30vw",
      height: "10vw",
      top: "-2vw",
      left: "-20%",
    },
    {
      title: "Shoulder",
      cameraPosition: [500, 750, -140],
      distance: 2.5,
      width: "30vw",
      height: "12vw",
      top: "-2vw",
      left: "-20%",
    },
    {
      title: "Arms",
      cameraPosition: [500, 300, -140],
      distance: 2.5,

      width: "25vw",
      height: "15vw",
      top: "2vw",
      left: "-30%",
    },
    {
      title: "Legs",
      cameraPosition: [280, -500, -30],
      distance: 2.5,

      width: "30vw",
      height: "20vw",
      top: "2vw",
      left: "-20%",
    },
    {
      title: "Thigh",
      cameraPosition: [280, -150, 200],
      distance: 2,

      width: "30vw",
      height: "20vw",
      top: "2vw",
      left: "-20%",
    },
    // { title: "Enter Manually", cameraPosition: [5, 10, 10], distance: 5.5 },
  ];

  const handleHightlightPart = async (top, left, height, width) => {
    animate(
      "#heighLighter__mainWrapper",
      {
        left: left,
        top: top,
      },
      {
        duration: 1,
        ease: "backInOut",
      }
    );
    animate(
      "#lineSVG",
      {
        width: width,
        height: height,
      },
      {
        duration: 1,
        ease: "backInOut",
      }
    );

    animate(
      "#painLocationLine",
      {
        pathLength: [0, 1],
      },
      {
        duration: 1,
        ease: "linear",
        delay: 0.2,
      }
    );
    await animate(
      "#painLocationTitle",
      {
        opacity: [0, 1],
      },
      {
        duration: 1,
        ease: "linear",
      }
    );
  };

  const heighLightIfSelected = (location, prevData) => {
    // console.log(prevData,'158');
    if (prevData) {
      const getLastLocation = prevData[prevData.length - 2];

      if (!getLastLocation) {
        setCuurentPainLocationChoosen({
          title: "Enter Manually",
          cameraPosition: [5, 10, 10],
          distance: 5.5,
        });

        setSelectedPainLocation({
          painLocation: "Enter Manually",
          cameraPosition: [5, 10, 10],
          distance: 5.5,
        });
        return;
      }
      const getPreviousLocation = allPainLocation.filter(
        (painLocation) => painLocation.title === getLastLocation
      );

      setCuurentPainLocationChoosen(...getPreviousLocation);
      setSelectedPainLocation({
        painLocation: getPreviousLocation[0].title
          ? getPreviousLocation[0].title
          : getLastLocation,
        cameraPosition: getPreviousLocation[0].cameraPosition,
        distance: getPreviousLocation[0].distance,
      });
      handleHightlightPart(
        getPreviousLocation[0].top,
        getPreviousLocation[0].left,
        getPreviousLocation[0].height,
        getPreviousLocation[0].width
      );
      return;
    }

    setCuurentPainLocationChoosen(location);
    setSelectedPainLocation({
      painLocation: location.title,
      cameraPosition: location.cameraPosition,
      distance: location.distance,
    });
    handleHightlightPart(
      location.top,
      location.left,
      location.height,
      location.width
    );
  };

  const handleOnClick = (location) => {
    setSelectedLocation((prevData) => {
      // Check if the title exists
      const exists = prevData.includes(location.title);

      // If it exists, remove it and add the new one
      if (exists) {
        const result = [...prevData.filter((item) => item !== location.title)];
        heighLightIfSelected(location, prevData);
        // return [...prevData.filter((item) => item !== location.title)];
        return result;
      }

      heighLightIfSelected(location);
      // If it doesn't exist, just add it
      return [...prevData, location.title];
    });

    setSelectedLocationMulti((prevData) => {
      // Ensure prevData is an array to prevent undefined errors
      const safePrevData = Array.isArray(prevData) ? prevData : [];

      // Remove any existing item with the same title
      const filteredData = safePrevData.filter((item) => {
        return item.title !== location.title;
      });

      // If filteredData length equals prevData length, no duplicate was found
      if (filteredData.length === safePrevData.length) {
        // No duplicate found, add new item
        setPatientMedicationInfo({
          ...patientMedicationInfo,
          selectedPainArea: [
            ...safePrevData,
            {
              title: location.title,
              SSimage: screenshot || null,
              painLevel: "",
            },
          ],
        });
        return [
          ...safePrevData,
          {
            title: location.title,
            SSimage: screenshot || null,
            painLevel: "",
          },
        ];
      }

      setPatientMedicationInfo({
        ...patientMedicationInfo,
        selectedPainArea: filteredData,
      });
      // If we get here, a duplicate was removed, return filteredData
      return filteredData;
    });
  };

  const handleDefaultImg = (curPainLoaction) => {
    if (curPainLoaction === "Arms") {
      return ArmSSimg;
    }
    if (curPainLoaction === "Mid Back") {
      return MidBackSSimg;
    }
    if (curPainLoaction === "Upper Back") {
      return UpperBackSSimg;
    }
    if (curPainLoaction === "Lower Back") {
      return LowerBackSSimg;
    }
    if (curPainLoaction === "Neck") {
      return NeckSSimg;
    }
    if (curPainLoaction === "Shoulder") {
      return ShoulderSSimg;
    }
    if (curPainLoaction === "Thigh") {
      return ThighSSimg;
    }
    if (curPainLoaction === "Legs") {
      return LegsSSimg;
    }
  };

  return (
    <>
      <div className="flex justify-between gap-4 mb-8">
        <div className="flex-1 flex justify-start items-start px-4 py-2 relative">
          <div className="absolute top-0 -left-[20vw] w-full h-full gradientBg" />
          <div className="w-[70%] relative z-20">
            <h2 className="text-[#ffffff] font-[600] font-mainFont text-[2.7dvw] mb-4">
              Select Pain Area
            </h2>
            <div className="p-5   rounded-lg w-full grid grid-cols-2 gap-3 ">
              {allPainLocation.map((location, id) => (
                <button
                  key={id}
                  onClick={() => {
                    handleOnClick(location);
                  }}
                  className={` py-2.5 text-[1.1vw] bg-baseColor border-none outline-none rounded-full w-full font-mainFont font-[600] text-[#000]    btnGraident2 transition-all duration-100 ease-in ${
                    selectedLoaction.includes(location.title) &&
                    "text-white btnActive"
                  }`}
                >
                  {location.title}
                </button>
              ))}
            </div>

            {selectedLoactionMulti.length > 0 && (
              <div className="mt-8">
                <h3 className="font-[600] text-[#ffffff] text-[1.2dvw]">
                  Selected Pain Area's
                </h3>
                <div className="grid grid-cols-3 gap-5 mt-6">
                  {selectedLoactionMulti.map((cur, id) => (
                    <div
                      key={id}
                      className="bg-[#333333]/10 border border-[#0A1E44] flex justify-center items-center p-2 rounded-xl"
                    >
                      <img
                        src={handleDefaultImg(cur.title)}
                        className="h-auto"
                        alt="default-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          ref={elementRef}
          id="mobelWrapper"
          className="flex-1  flex justify-center items-center h-[70vh] relative"
        >
          <div
            ref={scope}
            className="flex-1  flex justify-center items-center h-[70vh] relative"
          >
            <div
              id="heighLighter__mainWrapper"
              className={`absolute -top-[2vw] -left-[10%] z-20  ${
                currentPainLocationChoosen.title &&
                currentPainLocationChoosen.title !== "Enter Manually"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <h3
                id="painLocationTitle"
                className="font-[600] text-[1.5vw]  font-mainFont text-white"
              >
                {currentPainLocationChoosen.title}
              </h3>
              <svg
                width="268"
                height="150"
                viewBox="0 0 268 217"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30vw] h-[8vw] rotate-180"
                id="lineSVG"
              >
                <path
                  opacity="0.6"
                  d="M0.888916 1H180.5L266.5 216.5"
                  stroke="#317BDB"
                  stroke-width="1.6708"
                  id="painLocationLine"
                />
              </svg>
            </div>
            <MaleModel3D
              cameraPosition={currentPainLocationChoosen.cameraPosition}
              distance={currentPainLocationChoosen.distance}
              takeScreenShort={takeScreenShort}
              setScreenshot={setScreenshot}
            />
          </div>
        </div>
      </div>
    </>
  );
};
