import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { IoIosRemoveCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { addTodo, toggleCompleted, updateTodo, removeTodo } from "./todosSlice";

const Todos = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const [todoName, setTodoName] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [isUpdatingId, setisUpdatingId] = useState("");
    const [searchText, setSearchText] = useState("");

    const selectFiltedTodos = createSelector(
        (state) => state.todos,
        (todos) => todos.filter((todo) => todo.name.includes(searchText))
    );

    const filtedTodos = useSelector(selectFiltedTodos);

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handleAddTodo = () => {
        if (todoName) {
            dispatch(addTodo(todoName));
            setTodoName("");
        } else {
            alert("Don't leave todo name empty!");
        }
    };

    const handleCompleted = (id) => {
        dispatch(toggleCompleted(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleEditButtonClick = (id) => {
        const currentTodo = filtedTodos.find((todo) => todo.id === id);
        setTodoName(currentTodo.name);
        setIsUpdating(true);
        setisUpdatingId(id);
        inputRef.current.focus();
    };

    const handleUpdateTodo = () => {
        dispatch(
            updateTodo({
                id: isUpdatingId,
                name: todoName,
            })
        );
        setTodoName("");
        setIsUpdating(false);
    };

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div>
            <h1 className="text-center text-[30px] font-bold">
                Todo App With Redux Toolkit
            </h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearchText}
                    className="w-full mt-[30px] py-[12px]"
                />
            </div>
            <ul className="mt-[30px]">
                {filtedTodos.map((todo) => (
                    <li
                        key={todo.id}
                        className="py-1 border-b border-black flex items-center justify-between"
                    >
                        <div className="flex-1">
                            <h3 className="text-[20px] font-bold">
                                {todo.name}
                            </h3>

                            <p className="pl-2">
                                <span className="mr-[15px]">Is completed:</span>
                                <input
                                    type="checkbox"
                                    checked={todo.completed ? "checked" : ""}
                                    onChange={() => handleCompleted(todo.id)}
                                />
                            </p>
                        </div>
                        <div className="flex">
                            <IoIosRemoveCircle
                                onClick={() => handleRemoveTodo(todo.id)}
                                className="text-[26px] text-red-500 cursor-pointer hover:opacity-75"
                            />
                            <AiFillEdit
                                onClick={() => handleEditButtonClick(todo.id)}
                                className="text-[26px] text-blue-500 cursor-pointer hover:opacity-75"
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex items-center mt-[30px]">
                <input
                    type="text"
                    value={todoName}
                    ref={inputRef}
                    placeholder="Enter a todo name..."
                    onChange={handleInputChange}
                    className="w-full py-[12px]"
                />
                {isUpdating ? (
                    <button onClick={handleUpdateTodo} className="btn-primary">
                        Update Todo
                    </button>
                ) : (
                    <button onClick={handleAddTodo} className="btn-primary">
                        Add Todo
                    </button>
                )}
            </div>
        </div>
    );
};
export default Todos;
