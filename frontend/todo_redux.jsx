import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import {allTodos} from './reducers/selectors';

import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    <h1>test page</h1>

    //testing. not typically in actual code 
    
    window.receiveTodos = receiveTodos; 
    window.allTodos = allTodos; 
    const store = configureStore(); 
    window.store = store; 
    
    ReactDOM.render(<Root store={store} />, root)
}) 

// window.store.getState();
// const newTodos = [{ id: 1, title: 'break up'}, { id: 2, title: 'hot girl summer'}]
// window.store.dispatch(receiveTodos(newTodos));