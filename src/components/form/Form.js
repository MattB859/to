import React, { useState } from 'react'
import './form.css';

const Form = () => {

  const [input, setInput] =  useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(input, e.target.value);
  }
  return (
    <>
        <form>
            <div className='form-container'>
                <input 
                  onChange={handleChange}
                  type="text" 
                  placeholder='Enter a Todo...'
                  value={input}
                  required
                />
                <button type="submit">+</button> 
            </div> 
        </form>
    </>
  )
}

export default Form