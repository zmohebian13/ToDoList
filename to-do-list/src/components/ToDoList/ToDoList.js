import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import ToDo from "../ToDo/ToDo";
import "./ToDoList.css";

export default function ToDoList() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const todoTitleHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    let newTodoObject = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    setTodos((prevState) => {
      return [...prevState, newTodoObject];
    });

    setTodoTitle("");
  };

  const removeTodo = (todoId) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const editTodo = (todoId) => {
    console.log(todoId);

    let newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });

    setTodos(newTodos);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Header />
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
      <ul className="todo-list">
        {status === "completed" &&
          todos
            .filter((todo) => todo.completed === true)
            .map((todo) => (
              <ToDo
                key={todo.id}
                {...todo}
                onRemove={removeTodo}
                onEdit={editTodo}
              />
            ))}

        {status === "uncompleted" &&
          todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <ToDo
                key={todo.id}
                {...todo}
                onRemove={removeTodo}
                onEdit={editTodo}
              />
            ))}

        {status === "all" &&
          todos.map((todo) => (
            <ToDo
              key={todo.id}
              {...todo}
              onRemove={removeTodo}
              onEdit={editTodo}
            />
          ))}
      </ul>

      <div className="select-box">
        <select name="" id="" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
}
