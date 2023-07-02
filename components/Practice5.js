import React from 'react'
import { useState } from 'react'

function Practice5() {
    const [formValue, setFormValue] = useState({name: "", email: "", message: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formValue.name}\nEmail: ${formValue.email}\nMessage: ${formValue.message}`);
    };


  return (
    <div>
    <h1>Basic form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formValue.name} onChange={handleChange}/>
      <br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formValue.email} onChange={handleChange}/>
      <br></br>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formValue.message} onChange={handleChange}/>
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Practice5