import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type MyCharacterSelectionState = {
  list: string[];
};

const initialState: MyCharacterSelectionState = {
  list: [],
};

export const myCharacterSelectionSlice = createSlice({
  name: 'myCharacterSelection',
  initialState,
  reducers: {
    clear: state => {
      state.list = [];
    },
    addCharacter: (state, action: PayloadAction<string>) => {
      state.list = [...state.list, action.payload];
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {clear, addCharacter, removeCharacter} =
  myCharacterSelectionSlice.actions;

export default myCharacterSelectionSlice.reducer;
