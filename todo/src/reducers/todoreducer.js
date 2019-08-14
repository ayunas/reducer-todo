export const initialState = {
    todos : []
}

function todoreducer(state,action) {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }
        case "TOGGLE":
                const arr = [...state.todos];
                const index = state.todos.indexOf(action.payload);
                const todo = {...action.payload};
                todo.completed = !todo.completed;
                arr.splice(index,1,todo);
                return {
                    ...state,
                    todos : arr
                }
            
        default : 
            return state;
    }
}

export default todoreducer;



