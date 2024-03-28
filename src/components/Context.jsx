import React, { useEffect } from 'react'
import { createContext,useContext,useState } from "react"
const TodoContext=createContext();
 const TodoProvider=({children})=>{

    const[todos,setTodos]=useState(JSON.parse(localStorage.getItem("todo"))||[])
    const [editMode,setEditmode]=useState(false)
    const [editText,setEditText]=useState("")
    const [text,setText]=useState('');
    const [editIndex,setEditIndex]=useState(null)

    useEffect(()=>{
        
        localStorage.setItem("todo",JSON.stringify(todos))

    },[todos])

    const handleText=(e)=>{
        setText(e.target.value)

    }
    
    
    
    const addTodo=(text)=>{
        if(text=='')
        {
            alert("all fields req")
            return
        }
        if(editMode==true){
            const updatedTodos=[...todos]
            updatedTodos[editIndex]=text
            setTodos([...updatedTodos])
            setEditmode(false)
        }
        else{

        
        setTodos([...todos,text]) }
        setText("")
       
    }
    const removeTodo=(index)=>{
        setTodos(todos.filter((_,i)=>i!==index))

    }
    const editTodo=(index)=>{
        setEditmode(true)
        setEditText(todos[index])
        setEditIndex(index)
        setText(todos[index])

        
    }

    return(
        <TodoContext.Provider value={{addTodo,todos,removeTodo,editTodo,editMode,editText,handleText,text,editIndex}}> 
            {children}
        </TodoContext.Provider>
    );
    
    
};
 const useTodoContext = () => useContext(TodoContext);


export {TodoProvider,useTodoContext}