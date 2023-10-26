import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // null이 아니라는 확신이 있을 때 '!' 느낌표를 사용
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo