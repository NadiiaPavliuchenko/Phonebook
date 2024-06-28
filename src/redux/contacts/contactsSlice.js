import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
  updateStatusContact,
} from './operations';

const initialContactsState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.items.findIndex(
          contact => contact._id === updatedItem._id
        );
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(updateStatusContact.fulfilled, (state, action) => {
        console.log(action.payload);
        const updatedItem = action.payload;
        const index = state.items.findIndex(
          contact => contact._id === updatedItem._id
        );
        if (index !== -1) {
          state.items[index] = updatedItem;
        }
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
