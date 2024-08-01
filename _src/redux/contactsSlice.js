import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    items: [
        { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
        { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
      ]
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                const newContact = action.payload;

                state.items.push(newContact)
            },
            prepare({name, number: phone}) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        phone
                    }
                }
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload?.id)
        }
    }

})

const {reducer: contactReducer, actions} = contactsSlice;

const contactsActions = {
    ...actions
}

const selectorsContacts = {
    selectContacts: (state) => state.contacts.items
}

export {
    contactReducer,
    contactsActions,
    selectorsContacts
}