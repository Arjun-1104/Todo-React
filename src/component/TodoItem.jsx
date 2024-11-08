import SingleTodo from "./SingleTodo";
import style from '../styles/TodoItem.module.css';

function TodoItem({todoItems,handleDeleteTodo}) {
    return <div className={`container ${style.item}`}>
        {todoItems.map(({name,dueDate})=> 
        <SingleTodo key={name} name={name} dueDate={dueDate} handleDeleteTodo={handleDeleteTodo}></SingleTodo>
         )}
        
    </div>
}

export default TodoItem;