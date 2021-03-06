import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {


const [inputValue, setInputValue] = useState('');
const [todos, setToDos] = useState([]);

const handleAdd=(e)=>{
  e.preventDefault(e);
 
  if(inputValue.trim() ==='') return;
 
  setToDos([...todos,{
    text:inputValue,
    id:uuidv4()
  }])
 
  setInputValue('');
}

const handleDelete=(id)=>{
  setToDos(todos.filter((todo)=>todo.id !==id))
} 


  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleAdd}>
          <input type="text" 
          autoFocus
          value = {inputValue}
          onChange={e=>setInputValue(e.target.value)}
          placeholder='Add todo...'
          />
          <button type='submit'>Add</button>
        </form>
        {todos.map((todo)=>(
          <div key ={todo.id} className="todo">
            <p>{todo.text} </p>
            <i onClick={()=> handleDelete(todo.id)} className="fas fa-trash-alt"></i>
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
