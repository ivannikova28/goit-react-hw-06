import { useDispatch, useSelector } from "react-redux";

import styles from './ContactsList.module.css';

import { Contact } from "../Contact/Contact";

import { contactsActions, selectorsContacts } from "../../redux/contactsSlice";
import { selectorsFilter } from "../../redux/filtersSlice";

export const ContactList = () => {
  const dispatch = useDispatch()

  const contacts = useSelector(selectorsContacts.selectContacts)

  const searchContacts = useSelector(selectorsFilter.selectNameFilter)

  const handlerDeleteContact = (id) => {
    dispatch(contactsActions.deleteContact({ id }))
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase())
  );

  if (!visibleContacts.length) {
    return <p>Contacts Empty</p>
  }

  return (
    <ul className={styles.list}>
      {
        visibleContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact 
                contact={contact}
                handlerDeleteContact={handlerDeleteContact}
              />
            </li>
          );
        })
      }
    </ul>
  )
}
