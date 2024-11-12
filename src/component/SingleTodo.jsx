import style from '../styles/SingleTodo.module.css';
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { TodoItemContext } from '../store/todo-item-store';

let SingleTodo = ({name,dueDate}) => {

    let {deleteItem} = useContext(TodoItemContext);
    
    return <>
    <div className={`row ${style['ar-center']}`}>
            <div className="col-4">
                <p>{name}</p>
            </div>
            <div className="col-3">
                <p>{dueDate}</p>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => deleteItem(name)}><MdDelete/></button>
            </div>
        </div>
    </>
}

export default SingleTodo;