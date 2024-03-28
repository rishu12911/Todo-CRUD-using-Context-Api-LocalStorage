import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './components/Context'
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <TodoProvider>
      <div className='app-container'>
        <h1 className='title'>Todo list using Context API and LocalStorage</h1>
        <div className='todoform'>
          <TodoForm/> 
        </div>
        <div>
          <TodoList/>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
