import React from 'react';
import './App.scss';
import Input from './components/input/Input';
import TodoItem from './components/todoItem/TodoItem';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__container__list'>
          <h2>Todo App</h2>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
