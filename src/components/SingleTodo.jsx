import React, { useState } from 'react'
import './SingleTodo.css'
import { ReactComponent as IconDelete } from '../assets/trash-light.svg'
import { ReactComponent as IconEdit } from '../assets/note-pencil-light.svg'
import PropTypes from 'prop-types'
export default function SingleTodo ({ text, id, isDone, handleDelete, handleEditTodo, handleIsDone }) {
  const [isEdit, setIsEdit] = useState(false)
  const [tempText, setTempText] = useState(text)
  const mainClass = 'todo-main'.concat(isDone ? ' done' : '')
  const editElement = (
    <div className='todo-edit'>
      <input className='todo-editInput' value={tempText} onChange={handleEditChange}/>
      <button className='todo-editBtn' onClick={toggleEdit}>Cancel</button>
      <button className='todo-editBtn' onClick={handleSaveEdit}>Save</button>
    </div>
  )
  const showTextElement = (
      <main className={mainClass} onClick={() => handleIsDone(id)}>
        <span className='todo-isDone'></span>
        <p className='todo-text'>
          {text}
        </p>
      </main>
  )
  function toggleEdit () {
    setTempText(text)
    setIsEdit(!isEdit)
  }
  function handleEditChange (e) {
    setTempText(e.target.value)
  }
  function handleSaveEdit () {
    handleEditTodo(id, tempText)
    setIsEdit(!isEdit)
  }
  return (
    <article className='todo'>
      <header className='todo-header'>
        <button className='todo-btn edit' onClick={toggleEdit}>
          <IconEdit />
          <span className='visually-hidden'>Edit Todo</span>
         </button>
        <button className='todo-btn delete' onClick={() => handleDelete(id)}>
          <IconDelete />
          <span className='visually-hidden'>Delete Todo</span>
        </button>
      </header>
      {isEdit ? editElement : showTextElement}
    </article>
  )
}

SingleTodo.propTypes = {
  text: PropTypes.string,
  isDone: PropTypes.bool,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  id: PropTypes.string,
  handleDelete: PropTypes.func,
  handleEditTodo: PropTypes.func,
  handleIsDone: PropTypes.func
}
