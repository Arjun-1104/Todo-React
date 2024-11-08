import style from '../styles/SingleTodo.module.css';
import { MdDelete } from "react-icons/md";

let SingleTodo = ({name,dueDate,handleDeleteTodo}) => {
    
    return <>
    <div className={`row ${style['ar-center']}`}>
            <div className="col-4">
                <p>{name}</p>
            </div>
            <div className="col-3">
                <p>{dueDate}</p>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteTodo(name)}><MdDelete/></button>
            </div>
        </div>
    </>
}

export default SingleTodo;