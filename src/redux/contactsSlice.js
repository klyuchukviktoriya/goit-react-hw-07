import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
    }
})

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
export const contactsReducer = slice.reducer;


export const selectFilteredContacts = createSelector([selectContacts], contacts => {
    return contacts.filter(item => item.name.toLowerCase());
})
