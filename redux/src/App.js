import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";


function App() {
  return (
    <>
      <h1 className="text-center text-3xl text-white bg-gray-700 p-4">Learn about redux</h1>
      <AddTodo/>
      <Todo/>
    </>
  );
}

export default App;
