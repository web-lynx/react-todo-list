import React from "react"

export const Item = ({ item, removeItem, completeItem }) => {
  return (
    <li className={ item.complete ? "complete" : "incomplete" }>
      <input type="checkbox" onChange={ completeItem }/>
      <p>{item.value}</p><button onClick={ removeItem }>Remove</button>
    </li>
  )
}