import { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from "./contexts"
import TodoItem from "./Components/TodoItem";


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previous) => [...previous, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((prevTodo) => 
        (id === prevTodo.id ? todo : prevTodo)
      )
    })
  }

  // const updateTodo = (id, todo) => {
  //   setTodos((prev) =>
  //     prev.map((prevTodo) =>
  //       (id === prevTodo.id ? todo : prevTodo)
  //     )
  //   );
  // }

  // const deleteTodo = (id) => {
  //   setTodos((prev) =>
  //     prev.filter((eachTodo) => id !== eachTodo.id)
  //   );
  // }
  // If you dont want to write return then dont use curly brackets {}
  // If {} is not used then the part will be automatically returned


  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((eachTodo) =>  id !== eachTodo.id )
    })
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
      )
    );
  };

  useEffect(() => {
    const alltodos = JSON.parse(localStorage.getItem("todos"));
    if (alltodos && alltodos.length > 0) {
      setTodos(alltodos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=> ( 
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
