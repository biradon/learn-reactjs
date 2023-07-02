import React from 'react'
import { useState } from 'react'

function Practice2() {
    const [input, setInput] = useState('Hello, Minh')

    const handleInput = (event) => {
        setInput(event.target.value);
    }

  // onChange only  use in input element like <input>, <select>, or <textarea>
  // To manage the state of these form elements, you can define the values for the input fields as an object 
  // using a single state variable and update each respective state variable using the
  return (
    <div>
        <h1>Practice onChange</h1>
        <input type='text' value={input} onChange={handleInput}></input> 
        <p>Your input go here: {input}</p>
    </div>
  )
}

export default Practice2