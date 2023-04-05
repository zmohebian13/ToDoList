import React from 'react'
import './Header.css'
import {PencilFill} from 'react-bootstrap-icons'

export default function Header() {
  return (
    <>
      <div className="heared-container">
        <h3 className="todo-title">TODO</h3>
        <PencilFill className='pen-icon'/>
      </div>
    </>
  );
}
