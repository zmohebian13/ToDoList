import React from "react";
import { Check, Trash3 } from "react-bootstrap-icons";
import "./ToDo.css";

export default function ToDo(props) {
  return (
    <>
      <div className="todo-container">
        <div className="todo-items">
          <li className="todo-item">{props.title}</li>
          <div className="add-trash-btn">
            <button className="check-btn">
              <Check />
            </button>
            <button className="trash-btn">
              <Trash3 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
