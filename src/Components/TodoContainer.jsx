import React from "react"
import { Item } from "./TodoItem"

export const TodoContainer = ({ list, handleRemove, handleComplete }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return <Item key={ index } item={ item } removeItem={ () => handleRemove(index) } completeItem={ () => handleComplete(index) } />
      })}
    </ul>
  )
}