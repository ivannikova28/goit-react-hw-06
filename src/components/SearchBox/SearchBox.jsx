import { useDispatch, useSelector } from 'react-redux'

import styles from './SearchBox.module.css'

import { filterActions, selectorsFilter } from '../../redux/filtersSlice'

export const SearchBox = () => {
  const dispatch = useDispatch();

  const searchContacts = useSelector(selectorsFilter.selectNameFilter)

  const handlerSearchContacts = (name) => {
    dispatch(filterActions.changeFilter({ name }))
  }

  const handlerChange = (e) => {
    handlerSearchContacts(e.target.value)
  }

  return (
    <div className={styles.box}>
      <p className={styles.label}>Find contact by name</p>
      <input className={styles.input}
        type="text"
        value={searchContacts}
        onChange={handlerChange}
      />
    </div>
  );
}
