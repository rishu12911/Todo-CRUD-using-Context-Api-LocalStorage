import React, { useState } from 'react'
import { useTodoContext } from './Context';

const TodoForm = () => {
    const {addTodo,handleText,text}=useTodoContext()
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
       
        addTodo(text)

        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter task' value={text} onChange={handleText}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm