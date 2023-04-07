import React from 'react'
import { Container, Row } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from '../Header/Header'
import ToDo from '../ToDo/ToDo'
import './ToDoList.css'

export default function ToDoList() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <div className="left-side">
            <InputGroup className="todolist-input">
              <Form.Control
                placeholder="Create a new todo ..."
                className="input-value"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <div className='plus-icon'>+</div> 
              </Button>
            </InputGroup>
          </div>
        </Row>
      </Container>
      <ToDo />
    </div>
  );
}
