import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // NewTodo를 통해 todo가 추가되면 todos가 동적으로 변해야함 
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript'),
  // ];


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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
