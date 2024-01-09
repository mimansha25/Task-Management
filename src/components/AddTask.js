import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {
  const baseURL = "http://localhost:8097/api/v1/tasks";

  const navigate = useNavigate();

  const [task, setTask] = useState("");
 

  const nameChangeHandler = (event) => {
    setTask(event.target.value);
  };
 


  const cancelHandler = () => {
    //reset the values of input fields
    setTask("");
    navigate("/home");
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        task: task,
        
      })
      .then((response) => {
        alert("Task " + task + " added successfully!");
        navigate("/home");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };
  return (
    <Alert variant="primary">
      <Container>
        <Form onSubmit={submitActionHandler}>
          <Form.Group controlId="form.Task">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              value={task}
              onChange={nameChangeHandler}
              placeholder="Enter Task"
              required
            />
          </Form.Group>
          
          <br></br>
          <Button type="submit">Add Task</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="submit" onClick={() => cancelHandler()}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Alert>
  )
}

export default AddTask