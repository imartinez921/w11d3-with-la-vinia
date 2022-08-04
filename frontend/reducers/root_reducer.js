import { combineReducers } from "redux";
import todosReducer from "./todos_reducer.js";


// boilerplate
const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;