import React, { useState } from "react"
import './App.css';
import { TodoForm } from "./Components/TodoForm"
import { TodoContainer } from "./Components/TodoContainer"

const App = () => {
  const [list,setList] = useState([])
  
  const handleForm = (item) => {
    setList([...list, { value: item, complete: false }])
  } 

  const handleRemove = (index) => {
    let tempArray = [...list]
    tempArray.splice(index, 1)
    setList(tempArray)
  }
  
  const handleComplete = (index) => {
    let tempArray = [...list]
    tempArray[index].complete = !tempArray[index].complete
    setList(tempArray)
  }

  return (
    <div className="app-container">
      <h1>Your ToDo List</h1>
      <TodoForm handleForm={handleForm} />
      <TodoContainer list={list} handleRemove={handleRemove} handleComplete={handleComplete} />
    </div>
  )
}

export default App;
