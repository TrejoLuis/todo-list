import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm.jsx'
import './App.css'
const dummyTodos = [
  {
    text: 'Amet quam inventore est',
    isDone: false,
    id: crypto.randomUUID()
  },
  {
    text: 'Dolor exercitationem maxime quaerat et fugiat consequatur quia Odit error possimus',
    isDone: false,
    id: crypto.randomUUID()
  },
  {
    text: 'Amet nihil corporis quibusdam delectus vitae possimus Placeat odit!',
    isDone: true,
    id: crypto.randomUUID()
  }
]

function App () {
  const [todos, setTodos] = useState(dummyTodos)
  const [todo, setTodo] = useState('')

  function onChangeNewTodo (e) {
    setTodo(e.target.value)
  }
  function onSubmitNewTodo (e) {
    e.preventDefault()
    setTodos(prev => {
      const newTodo = {
        text: todo,
        isDone: false,
        id: crypto.randomUUID()
      }
      return [...prev, newTodo]
    })
    setTodo('')
  }
  function onDeleteTodo (id) {
    setTodos(todos.filter(t => t.id !== id))
    console.log('delete')
  }
  function onEditTodo (id, newTodoText) {
    setTodos(todos.map(t => {
      if (t.id === id) {
        return {
          ...t,
          text: newTodoText
        }
      } else {
        return t
      }
    }))
  }
  function toggleIsDone (id) {
    setTodos(todos.map(t => {
      if (t.id === id) {
        return {
          ...t,
          isDone: !t.isDone
        }
      } else {
        return t
      }
    }))
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <main id='todoContainer'>
        <TodoForm
          newTodoText={todo}
          onChangeNewTodo={onChangeNewTodo}
          onSubmitNewTodo={onSubmitNewTodo}
         />
        <Todos
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
        toggleIsDone={toggleIsDone}
        />
      </main>
    </>
  )
}

export default App
