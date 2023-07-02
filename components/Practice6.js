import React from 'react'
import { useState } from 'react'

function Practice6() {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    function handleInputChange (event) {
        // to avoid the asynchorus in react. we create new variable to manipulate
        // the variable easly and more flexible
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5) {
            setInputError("Must more than 5 characters");
        } else {
            setInputError(null);
        }
    }

    function handleSubmit (event) {
        event.preventDefault();
        if (inputValue.length > 5) {
            alert("Your form has been submited successfully!");
        } else {
            setInputError("Must more than 5 characters");
        }
    }
  return (
    <div>
        <h1>Validation form</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Fruit:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Practice6