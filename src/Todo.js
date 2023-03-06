import React from 'react'

const Todo = (props) => {
   const deleted = ()=>{

   }
    return (
    <>
      <div className="todo_style">
      <i className='fa fa-times' aria-hidden="true" onClick={()=>{props.onselect(props.id)}} ></i>
      <li>{props.text}</li>
      </div>
    </>
  )
}

export default Todo
