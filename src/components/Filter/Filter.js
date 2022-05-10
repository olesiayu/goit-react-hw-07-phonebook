import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      ></input>
    </label>
  );
};

export default Filter;
