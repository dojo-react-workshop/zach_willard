import React from 'react';

const Todo = ({ toggleComplete, item, css, idx }) => {
  const { completed, name } = item;
  const { standard, card } = css;
  
  return (
      <div className={standard+" "+card+" Todo"}>
        <div className="Checkcircle" onClick={()=>{toggleComplete(idx)}}>
          {(completed) ? <span className="icon icon-check"></span> : null}
        </div>
        {(completed) ? <div className="todoname crossed">{name}</div> : <div className="todoname">{name}</div>}
      </div>
  )
}

export default Todo;