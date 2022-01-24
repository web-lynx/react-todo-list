import React, { useState } from "react"

export const TodoForm = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    handleForm(userInput)
    setUserInput("")
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" onChange={ (e) => setUserInput(e.target.value) } value={ userInput } />
      <button type="submit">Submit</button>
    </form>
  )
}