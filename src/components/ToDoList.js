import React from "react";
// import components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filteredTodos}) => {
    // console.log(filteredTodos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;