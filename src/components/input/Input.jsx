import React, { useState } from 'react';
import './Input.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/services/todoSlice';

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const addNewTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue('');
  };

  return (
    <form onSubmit={addNewTodo} className='input'>
      <input
        type='text'
        placeholder='Add Todo...'
        required
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Input;
