import React from 'react'
import { useState } from 'react'

function Practice4() {
    const [checkbox, setCheckbox] = useState(false)

    const handleCheckbox = (event) => {
        setCheckbox(event.target.checked)
    }
  return (
    <div>
        <h1>Checkbox</h1>
        <label>
        <input type='checkbox' checked={checkbox} onChange={handleCheckbox}></input>
        Blue
        </label>

        {checkbox && <div> Blue is selected </div>}
    </div>
  )
}

export default Practice4