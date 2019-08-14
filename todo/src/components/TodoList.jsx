import React from 'react';


function TodoList(props) {
    console.log('todolist props', props);
    React.useEffect(()=>{   
    },[]);

    function toggle(todo) {
        console.log('todo completed', todo.completed); 
        props.dispatch({type:"TOGGLE", payload: todo})
    }

    return (
        <div className="todos">
        {props.todos.map(todo => (
        <div className={todo.completed && "toggle"}
        onClick={() => toggle(todo)}>{todo.todo}</div>))}
        </div>
    )
}

export default TodoList;
