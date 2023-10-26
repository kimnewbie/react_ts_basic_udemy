import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // NewTodo를 통해 todo가 추가되면 todos가 동적으로 변해야함
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ];

  const addTodoHandler = (todoText: string) => {

  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
