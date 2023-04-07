import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'

export default function ToDoList() {
  
  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useState([])

  const todoTitleHandler = (event) => {
    setTodoTitle(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()

    let newTodoObject = {
      id : todos.length + 1,
      title : todoTitle,
      completed : false
    }

     setTodos((prevState) => {
       return [...prevState, newTodoObject];
     });

     setTodoTitle('')
  }


  return (
    <div>
      <Header />
      <Container>
        <Row>
          <div className="todolist-container">
            <form className="todolist-items" onSubmit={addTodo}>
              <input
                type="text"
                placeholder="Create a new ToDo ..."
                className="input-todo"
                onChange={todoTitleHandler}
                value={todoTitle}
              />
              <div className="add-button">
                <button className="plus-btn" type="submit">
                  +
                </button>
              </div>
            </form>
          </div>
        </Row>
      </Container>

      <ul className="todo-list">
        {todos.map((todo) => {
          <ToDo key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
}
