import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImagesDB, insertImage } from "../../db";

const initialState = {
  images: [],  
  selected: null,
  loading: false,
};

export const saveImage = createAsyncThunk("images/saveImage", async (image, thunkAPI) => {
  try{
    const dbResult = await insertImage(image.title, image.imageUri, image.description);
    return { id: dbResult.insertId, ...image };
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
  }
);

export const getImages = createAsyncThunk("images/getImages", async (_, thunkAPI) => {
  try{    
    const dbResult = await getImagesDB();    
    return dbResult.rows._array;
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {        
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveImage.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(saveImage.fulfilled, (state, action) => {
        state.images.push(action.payload);
        state.loading = false;        
      })      
      .addCase(saveImage.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getImages.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.images = action.payload;
        state.loading = false;        
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
      });
  },    
});

export const { addImage, setSelected } = imageSlice.actions;

export const selectImages = (state) => state.images.images;
export const selectedImage = (state) => state.images.selected;

export default imageSlice.reducer;