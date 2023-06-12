import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],  
  selected: null,
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {    
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  }
});

export const { addImage, setSelected } = imageSlice.actions;

export const selectImages = (state) => state.images.images;
export const selectedImage = (state) => state.images.selected;

export default imageSlice.reducer;