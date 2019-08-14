import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoreducer from './reducers/todoreducer';
import {initialState} from './reducers/todoreducer';


function App() {
  const [state, dispatch] = React.useReducer(todoreducer,initialState);

  console.log('state in app ', state);
  return (
    <>
      <TodoForm dispatch={dispatch}/>
      <TodoList todos={state.todos} dispatch={dispatch} />
    </>
  );
}

export default App;
