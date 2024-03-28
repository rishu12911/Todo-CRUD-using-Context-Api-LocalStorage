import React from 'react'
import { useTodoContext } from './Context'


const TodoList = () => {
    const {todos,removeTodo,editTodo}=useTodoContext();
   

  return (<>
        <div>
        <ul>
        {todos.map((item,index)=>(<li key={index}> 
        {item}
        <button onClick={()=>removeTodo(index)}> Delete </button> 
        <button onClick={()=>editTodo(index)}> Edit </button>
        </li>

        ))}
        </ul>
    </div>
    </>

  )
}

export default TodoList