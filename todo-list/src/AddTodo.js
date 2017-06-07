import React from 'react';

const AddTodo = ({ css, addToDo, handleChange, handleSubmit, toggleComplete }) => {
  const { standard, card } = css;

  return (
    <div className={standard+" "+card+" AddTodo"}>
      <a><span className="icon icon-caret-down" onClick={()=> {toggleComplete()}}></span></a>
      <form onSubmit={handleSubmit}><input type="text" value={addToDo} onChange={handleChange} placeholder="What needs to be done?"/></form>
    </div>
  )  
}

export default AddTodo;