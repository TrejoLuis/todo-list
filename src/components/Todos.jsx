import React from 'react'
import SingleTodo from './SingleTodo'
import PropTypes from 'prop-types'
import './Todos.css'
export default function Todos ({ todos, toggleIsDone, onDeleteTodo, onEditTodo }) {
  return (
    <ul className='todo-list'>
      {todos.map(todo =>
        <li key={todo.id}>
          <SingleTodo
            text={todo.text}
            handleEditTodo={onEditTodo}
            handleDelete={onDeleteTodo}
            handleIsDone={toggleIsDone}
            id={todo.id}
            isDone={todo.isDone}
          />
        </li>
      )}
    </ul>
  )
}

Todos.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  toggleIsDone: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onEditTodo: PropTypes.func
}
