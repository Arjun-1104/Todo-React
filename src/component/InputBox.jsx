import { useState } from 'react';
import style from '../styles/InputBox.module.css';
import { IoAddCircle } from "react-icons/io5";

function InputBox({onInputTask}) {

    let [todoName,setTodoName] = useState('');
    let [todoDate,setTodoDate] = useState('');

    let handleNameChange = (event) => {
        setTodoName(event.target.value);
    }
    let handleDateChange = (event) => {
        setTodoDate(event.target.value);
    }

    let handleAddBtn = () => {
        onInputTask(todoName,todoDate);
        setTodoName('');
        setTodoDate('');
    }

    return <div className={`container ${style.item}`}>
        <div className={`row ${style['ar-center']}`}>
            <div className="col-4">
                <input type="text" placeholder="Enter your task?" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-3">
                <input type="date" value={todoDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success" onClick={handleAddBtn}><IoAddCircle/></button>
            </div>
        </div>
    </div>
}

export default InputBox;