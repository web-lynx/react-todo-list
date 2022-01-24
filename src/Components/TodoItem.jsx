import React from "react"

export const Item = ({ item, removeItem, completeItem }) => {
  return (
    <li className={ item.complete ? "complete" : "incomplete" }>
      <button onClick={ completeItem }>Complete</button>
      <p>{item.value}</p><button onClick={ removeItem }>Remove</button>
    </li>
  )
}