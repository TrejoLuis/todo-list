import React from 'react'
import './SingleTodo.css'
import { ReactComponent as IconDelete } from '../assets/trash-light.svg'
import { ReactComponent as IconEdit } from '../assets/note-pencil-light.svg'
import PropTypes from 'prop-types'
export default function SingleTodo ({ text }) {
  return (
    <article className='todo'>
      <header className='todo-header'>
        <button className='todo-btn delete'>
          <IconEdit />
          <span className='visually-hidden'>Delete Todo</span>
         </button>
        <button className='todo-btn edit'>
          <IconDelete />
          <span className='visually-hidden'>Edit Todo</span>
        </button>
      </header>
      <p className='todo-text'>
        {text}
      </p>
    </article>
  )
}

SingleTodo.propTypes = {
  text: PropTypes.string
}
