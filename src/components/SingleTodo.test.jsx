import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import SingleTodo from './SingleTodo'

describe('Single Todo', () => {
  describe('Visual elements', () => {
    it('should return a root element in an article with class "todo"', () => {
      render(<SingleTodo />)
      const article = screen.getByRole('article')
      expect(article).toBeInTheDocument()
      expect(article.className).toBe('todo')
    })
    it('renders a header with edit and delete button', () => {
      render(<SingleTodo />)
      const header = screen.getByRole('heading')
      expect(header).toBeInTheDocument()
      expect(header.className).toBe('todo-header')
      // expect(screen.getByRole('button', {class: 'todo-btn edit'})).toBeInTheDocument()
      // expect(screen.getByRole)
    })
  })
})
