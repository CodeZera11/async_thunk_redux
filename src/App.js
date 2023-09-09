import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slices/todos";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  if (data.todos.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
      {data.todos.data &&
        data.todos.data.map((todo) => <li key={todo.title}>{todo.title}</li>)}
    </div>
  );
}

export default App;
