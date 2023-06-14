import React from 'react'
import { ReactComponent as IconAdd } from '../assets/plus-bold.svg'
import './TodoForm.css'
import PropTypes from 'prop-types'
export default function TodoForm ({ newTodoText, onChangeNewTodo, onSubmitNewTodo }) {
  return (
    <form id='todo-form' onSubmit={onSubmitNewTodo}>
      <input
        id='input-todoText'
        placeholder='New Todo...'
        onChange={onChangeNewTodo}
        value={newTodoText}
        required
      />
      <button type='submit'>
        <IconAdd />
      </button>
    </form>
  )
}

TodoForm.propTypes = {
  newTodoText: PropTypes.string,
  onChangeNewTodo: PropTypes.func,
  onSubmitNewTodo: PropTypes.func
}
