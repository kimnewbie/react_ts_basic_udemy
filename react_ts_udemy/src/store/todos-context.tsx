import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

// hook 사용을 위해서 export
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

// Context State 관리
const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);


    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((preveTodos) => {
            return preveTodos.concat(newTodo);
        })
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((preveTodos) => {
            return preveTodos.filter((todo) => todo.id !== todoId);
        })
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;