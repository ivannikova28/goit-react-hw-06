import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from "../ContactForm/ContactForm";
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from "../ContactList/ContactList";

import { contactsActions, selectorsContacts } from '../../redux/contactsSlice';
import { filterActions, selectorsFilter } from '../../redux/filtersSlice';


const App = () => {
  const dispatch = useDispatch()

  // const searchContacts = useSelector(state => state.filters.name)
  // const {name: searchContacts} = useSelector(state => state.filters)

  const searchContacts = useSelector(selectorsFilter.selectNameFilter)

  // const contacts = useSelector(state => state.contacts.items)
  // const {items: contacts} = useSelector(state => state.contacts.items)

  const contacts = useSelector(selectorsContacts.selectContacts)

  const handlerSearchContacts = (name) => {
    dispatch(filterActions.changeFilter({ name }))
  }

  const handlerAddContact = (newContact) => {
    dispatch(contactsActions.addContact(newContact))
  }

  const handlerDeleteContact = (id) => {
    dispatch(contactsActions.deleteContact({ id }))
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handlerAddContact={handlerAddContact} />
        <SearchBox value={searchContacts} handlerSearchContacts={handlerSearchContacts} />
        {visibleContacts.length ? (
          <ContactList contacts={visibleContacts} handlerDeleteContact={handlerDeleteContact} />
        ) : <p>Contacts Empty</p>}

      </div>
    </>
  );
}

export default App;
