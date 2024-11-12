import SingleTodo from "./SingleTodo";
import style from '../styles/TodoItem.module.css';
import { TodoItemContext } from "../store/todo-item-store";
import { useContext } from "react";

function TodoItem() {

    let {todoItems} = useContext(TodoItemContext);

    return <div className={`container ${style.item}`}>
        {todoItems.map(({name,dueDate})=> 
        <SingleTodo key={name} name={name} dueDate={dueDate}></SingleTodo>
         )}
        
    </div>
}

export default TodoItem;