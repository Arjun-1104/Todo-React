import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeading from "./component/TodoHeading";
import InputBox from "./component/InputBox";
import TodoItem from "./component/TodoItem";
import EmptyMessage from './component/EmptyMessage';
import { TodoItemContext } from './store/todo-item-store';
import { useReducer } from 'react';
import './App.css';

let todoItemsReducer = (currTodoItem,action) => {
  let newTodoItem = currTodoItem;
  if(action.type === 'NEW_ITEM'){
    newTodoItem = [...currTodoItem,{name: action.preload.itemName,dueDate: action.preload.itemDueDate}];
  }
  else if(action.type === 'DELETE_ITEM'){
    newTodoItem = currTodoItem.filter((item)=> item.name !== action.preload.deleteName)
  }
  return newTodoItem;
}

function App() {
  // let [todoItems,setTodoItems] = useState([]);
  let [todoItems,dispatch] = useReducer(todoItemsReducer,[]);

function addItem(itemName,itemDueDate){
  const newItemAction = {
    type: 'NEW_ITEM',
    preload: {
      itemName:itemName,
      itemDueDate:itemDueDate
    }
  }
  dispatch(newItemAction);
}


  // setTodoItems((currValue)=> [
  //   ...currValue,
  //   {name: itemName,dueDate: itemDueDate}
  // ]);


let deleteItem = (deleteName) => { 
  let deleteItemAction = {
    type: 'DELETE_ITEM',
    preload: {
      deleteName
    }
  }
  dispatch(deleteItemAction);
  // let newArr = todoItems.filter((item)=> item.name !== deleteName)
  // setTodoItems(newArr);
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
