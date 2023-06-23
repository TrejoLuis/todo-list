import React from 'react'
import './NavHeader.css'

export default function NavHeader () {
  return (
    <header id='navHeader'>
      <a className='logo' href='#'>
        Todo-List
      </a>
      <nav className='navMenu'>
        <ul>
          <li><a href='#'>Log In</a></li>
          <li><a href='#'>Sign Up</a></li>
        </ul>
      </nav>
    </header>
  )
}
