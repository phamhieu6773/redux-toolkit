import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Phạm Hiếu",
    age: "22",
    about: "I'm a good boy",
    avaUrl: "https://i.redd.it/ksmb0m02ppy51.png",
    themeColor: "#dc9c36",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
    // update: (state, action) => {
    //     state.name = action.payload.name;
    //     state.age = action.payload.age;
    //     state.about = action.payload.about;
    //     state.avaUrl = action.payload.avaUrl;
    //     state.themeColor = action.payload.themeColor;
    // }
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
