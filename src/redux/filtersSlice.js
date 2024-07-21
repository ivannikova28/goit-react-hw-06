import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ""
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload?.name
        }
    }
})


const {reducer: filterReducer, actions} = filterSlice;

const filterActions = {
    ...actions
}

const selectorsFilter = {
    // selectContacts = (state) => state.contacts.items
    selectNameFilter: (state) => state.filters.name
}

export {
    filterReducer,
    filterActions,
    selectorsFilter
}