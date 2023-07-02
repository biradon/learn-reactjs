import React from 'react'
import { useState } from 'react'



function Test() {
    const [value, setValue] = useState({amount: "", isIncome: false, account: ""})

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // Handle for each case depend on the input type
        let newValue;
        if (type === "checkbox") {
          newValue = checked;
        } else {
          newValue = value;
        }
        
        setValue((prevValue) => ({ ...prevValue, [name]: newValue }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Amount is: ${value.amount}\n Income is: ${value.isIncome}\n Account is: ${value.account} `)
    }
    
  return (
    <div>
        <h1>This is my Test</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='amount'>Amount</label>
            <input type='number' id='amount' name='amount' value={value.amount} onChange={handleChange}></input>
            <br></br>
            <label htmlFor='isIncome'>Is Income</label>
            <input type='checkbox' id='isIncome' name='isIncome'  checked={value.isIncome} onChange={handleChange}></input>
            <br></br>
            <label htmlFor='account'>Account</label>
            <select id='account' name='account' value={value.account} onChange={handleChange}>
                <option value="CIBC">CIBC</option>
                <option value="TD">TD</option>
                <option value="RBC">RBC</option>
                <option value="VCB">VCB</option>
            </select>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Test