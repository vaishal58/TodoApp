import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
function App() {
  const[list,newlist]=useState("");
  const[Items,setItem]=useState([])
  const aa=(event)=>{
      newlist(event.target.value);
  }
  const bb=()=>{
       setItem((old)=>{
        return [...old,list]
       })
       newlist('')
  }
  const deleteItem=(id)=>{
     console.log('de')
     setItem((old)=>{
      return old.filter((arrElem,index)=>{
             return index !== id;
      })
     })
  }
  return (
   <>
      <div className='main_div'>
          <div className='center_div'>
            <br />
            <h1>VaIsHal Thing To DO</h1>
            <br />
            <input type="text" placeholder='Enter work to be done' onChange={aa} value={list} />
            <button onClick={bb} >+</button>
            <ol>
             { Items.map((itemval,index) => {
               return  <Todo key={index} id={index} text={itemval} onselect={deleteItem}/>
              })}
            </ol>
          </div>
      </div>
   </>
  );
}

export default App;
