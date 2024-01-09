import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";

const EditTask = () => {
    const editURL = "http://localhost:8097/api/v1/tasks/";
    const navigate = useNavigate();
    const param = useParams();
  
    const [id, setId] = useState(0);
    const [task, setTask] = useState("");
  
    useEffect(() => {
      axios
        .get(editURL + param.id)
        .then((response) => {
          const taskData = response.data;
          setId(taskData.id);
          setTask(taskData.task);
      
        })
        .catch((error) => {
          alert("Error Ocurred getting Task detail:" + error);
        });
    },[]);
  
    const taskChangeHandler = (event) => {
      setTask(event.target.value);
    };
  
  
    const submitActionHandler = (event) => {
      event.preventDefault();
      axios
        .put(editURL + param.id, {
          id: id,
          task: task,
        })
        .then((response) => {
          alert("Task " + id + " updated!");
          navigate("/home");
        })
        .catch((error) => {
          alert("Error Ocurred updating Task:" + error);
        });
    };

  return (
    <Alert variant="primary">
    <Container>
      <Form onSubmit={submitActionHandler} id="data">
        <Form.Group controlId="form.id">
          <Form.Label>Id</Form.Label>
          <Form.Control value={id} readonly="readonly" />
        </Form.Group>
        <Form.Group controlId="form.Task">
          <Form.Label> Task</Form.Label>
          <Form.Control
            type="text"
            value={task}
            onChange={taskChangeHandler}
            placeholder="Enter Updated Task"
            required
          />
        </Form.Group>
       
        <br></br>
        <Button type="submit">Update Task</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type="submit" onClick={() => navigate("/home")}>
          Cancel
        </Button>
      </Form>
    </Container>
  </Alert>
  )
}

export default EditTask