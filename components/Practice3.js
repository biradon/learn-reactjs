import React from 'react'
import { useState } from 'react'

function Practice3() {
    const [option, setOption] = useState(' ')

    const handlePullDown = (event) => {
        setOption(event.target.value)
    }
  return (
    <div>
        <h1>Select Pull Down</h1>
        <select value={option} onChange={handlePullDown}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <p>Selected option: {option}</p>
    </div>
  )
}

export default Practice3