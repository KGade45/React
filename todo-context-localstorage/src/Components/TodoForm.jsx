import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const handleClick = (e)=>{
        e.preventDefault();
        if(!todo)   return;
        addTodo({todo:todo, completed: false})
        // this todo:todo can be written as todo because both have same name
        setTodo("");
    }

    return (
        <form className="flex" onChange={(e) => setTodo(e.target.value)}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            onClick={handleClick}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

