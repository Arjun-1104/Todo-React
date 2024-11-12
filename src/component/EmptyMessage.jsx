import { useContext } from "react"
import { TodoItemContext } from "../store/todo-item-store";

let EmptyMessage = () => {
    
    let {todoItems} = useContext(TodoItemContext);

    return todoItems.length===0 && <h2 className="text-center m-4">Todo is Empty.</h2>  
}

export default EmptyMessage;