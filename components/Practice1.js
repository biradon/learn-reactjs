import React from 'react'
import { useState } from 'react'

function Practice1() {
    const [value, setValue] = useState(0)

  return (
    <div>
        <h1>How to use useState</h1>
        <h3>{value}</h3>
        <button onClick={() => setValue(value + 1)}>Plus</button>
        <button onClick={() => setValue(value - 1)}>Minus</button>
    </div>
  )
}

export default Practice1
