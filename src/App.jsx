import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeading from "./component/TodoHeading";
import InputBox from "./component/InputBox";
import TodoItem from "./component/TodoItem";
import EmptyMessage from './component/EmptyMessage';
import { TodoItemContext } from './store/todo-item-store';
import { useState } from 'react';
import './App.css';

function App() {
  let [todoItems,setTodoItems] = useState([]);
//   let todoItems = [
//   {
//     name: 'create a project',
//     dueDate: '10/10/24'
//   },
//   {
//     name: 'learn java',
//     dueDate: '07/10/24'
//   },
//   {
//     name: 'revision development',
//     dueDate: '12/10/24'
//   }
// ];

function addItem(itemName,itemDueDate){
  setTodoItems((currValue)=> [
    ...currValue,
    {name: itemName,dueDate: itemDueDate}
  ]);
}

let deleteItem = (deleteName) => { 
  let newArr = todoItems.filter((item)=> item.name !== deleteName)
  setTodoItems(newArr);
}

// console.log(todoItems)

  return <div className="container w-50 outerContainer">
    <div className="container mx-1">
      <TodoItemContext.Provider value={{todoItems,addItem,deleteItem}}>
        <TodoHeading></TodoHeading>
        <InputBox></InputBox>
        <EmptyMessage></EmptyMessage>
        <TodoItem></TodoItem> 
      </TodoItemContext.Provider>
   </div>
  </div>
}

export default App;
