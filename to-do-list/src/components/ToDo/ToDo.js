import React, { useState } from "react";
import { Check, Trash3 } from "react-bootstrap-icons";
import "./ToDo.css";

export default function ToDo (props) {
  
  const removeClickHandler = (id) => {
    props.onRemove(id)
  }

  const editClickHandler = (id) => {
    props.onEdit(id)
  }
  
  return (
    <>
      <div className="todo-container">
        <div className={`todo-items ${props.completed ? "completed" : ""} `}>
          <li className="todo-item">{props.title}</li>
          <div className="add-trash-btn">
            <button className="check-btn" onClick={() => {editClickHandler(props.id)}}>
              <Check />
            </button>
            <button
              className="trash-btn"
              onClick={() => {removeClickHandler(props.id)}}>
              <Trash3 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
