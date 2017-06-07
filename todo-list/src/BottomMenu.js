import React from 'react';

const BottomMenu = ({ css, itemsLeft, completedCount, filter, setFilter, clearCompleted }) => {
  const { standard, card } = css;

  const handleFilterClick = (event) => {
      setFilter(event.currentTarget.innerText);
  }

  return (
    <div className={standard+" "+card+" BottomMenu"}>
      <h4>{itemsLeft} {itemsLeft === 1 ? "item" : "items"} left</h4>
      <ul className="filter-nav">
        <li className={filter==="All" ? "filter-nav-entry active" : "filter-nav-entry"}>
            <button onClick={handleFilterClick}>All</button></li>
        <li className={filter==="Active" ? "filter-nav-entry active" : "filter-nav-entry"}>
            <button onClick={handleFilterClick}>Active</button></li>
        <li className={filter==="Completed" ? "filter-nav-entry active" : "filter-nav-entry"}>
            <button onClick={handleFilterClick}>Completed</button></li>
      </ul>
      {completedCount > 0 ? <h4 onClick={clearCompleted}>Clear completed</h4> : null}
    </div>
  )
}

export default BottomMenu;