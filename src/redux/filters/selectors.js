import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';


export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, contactsFilter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(contactsFilter.toLowerCase().trim()) || contact.number.toLowerCase().includes(contactsFilter.toLowerCase().trim()))
});

