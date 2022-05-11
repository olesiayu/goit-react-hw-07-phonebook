import React from 'react';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';

const ContactList = () => {
  const { data: contacts, isSuccess } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };
  if (isSuccess) {
    return (
      <ul>
        {getVisibleContacts().map(({ id, name, phone }) => (
          <ListItem key={id} number={phone} name={name} id={id} />
        ))}
      </ul>
    );
  }
};

export default ContactList;
