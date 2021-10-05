import React from 'react';
import './TodoItem.scss';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../../redux/services/todoSlice';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(toggleCompleted({ id: id, completed: !completed }));
  };
  const handleDeleted = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className='todo__item'>
      <div className='todo__item__check'>
        <Checkbox {...label} color='success' onChange={handleCompleted} />
      </div>
      <p className={`todo__item__paragraph ${completed && 'todo__item__done'}`}>
        {title}
      </p>
      <div className='todo__item__bin'>
        <IconButton onClick={handleDeleted} aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
