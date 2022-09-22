import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosRemoveCircle } from "react-icons/io";
import { addTodo, toggleCompleted, removeTodo } from "./todosSlice";

const Todos = () => {
    const Todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState("");

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handleAddTodo = () => {
        dispatch(
            addTodo({
                id: uuid(),
                name: todoName,
                completed: false,
            })
        );
        setTodoName("");
    };

    const handleCompleted = (id) => {
        dispatch(toggleCompleted(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <h1 className="text-center text-[30px] font-bold">
                Todo App With Redux Toolkit
            </h1>
            <ul className="mt-[30px]">
                {Todos.map((todo) => (
                    <li key={todo.id} className="py-1 border-b border-black">
                        <div className="flex justify-between text-[20px] ">
                            {todo.name}
                            <IoIosRemoveCircle
                                onClick={() => handleRemoveTodo(todo.id)}
                                className="text-[26px] cursor-pointer hover:opacity-75"
                            />
                        </div>
                        <p>
                            <span className="mr-[15px]">Is completed:</span>
                            <input
                                type="checkbox"
                                checked={todo.completed ? "checked" : ""}
                                onChange={() => handleCompleted(todo.id)}
                            />
                        </p>
                    </li>
                ))}
            </ul>
            <div className="flex items-center mt-[30px]">
                <input
                    type="text"
                    value={todoName}
                    onChange={handleInputChange}
                    className="w-full py-[12px]"
                />
                <button onClick={handleAddTodo} className="btn-primary">
                    Add Todo
                </button>
            </div>
        </div>
    );
};
export default Todos;
