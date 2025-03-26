import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export const submitQuestionary = async (data) => {
  console.log("Submitting data:", data);

  try {
    const res = await axios.post(
      `${url}/uploads/dicom/file/question`,
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response:", res.data);

    if (res.data) {
      window.location = "/preview";
    }
  } catch (error) {
    console.error("Error submitting questionnaire:", error.message);
    throw error;
  }
};
