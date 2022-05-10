import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import s from './ListItem.module.css';

const ListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
