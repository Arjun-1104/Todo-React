import { useContext, useRef } from 'react';
import style from '../styles/InputBox.module.css';
import { IoAddCircle } from "react-icons/io5";
import { TodoItemContext } from '../store/todo-item-store';

function InputBox() {

    let {addItem} = useContext(TodoItemContext);

    let nameElement = useRef();
    let dueDateElement = useRef();

    let handleAddBtn = (event) => {
        event.preventDefault();
        let todoName = nameElement.current.value;
        let todoDate = dueDateElement.current.value;
        nameElement.current.value = '';
        dueDateElement.current.value = '';
        addItem(todoName,todoDate);
    }

    return <div className={`container ${style.item}`}>
        <form className={`row ${style['ar-center']}`} onSubmit={handleAddBtn}>
            <div className="col-4">
                <input ref={nameElement} type="text" placeholder="Enter your task?"/>
            </div>
            <div className="col-3">
                <input ref={dueDateElement} type="date"/>
            </div>
            <div className="col-2">
                <button className="btn btn-success"><IoAddCircle/></button>
            </div>
        </form>
    </div>
}

export default InputBox;