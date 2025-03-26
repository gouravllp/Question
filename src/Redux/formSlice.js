import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientInfo: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveProgress: (state, action) => {
      console.log(action, "from the action");
      return {
        patientInfo: action.payload,
      };
    },
  },
});

export const { saveProgress } = formSlice.actions;
export default formSlice.reducer;
