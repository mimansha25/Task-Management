import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

  const baseURL = "http://localhost:8097/api/v1";

  useEffect(() => {
    setTaskData();
  }, []);

  const setTaskData = () => {
    axios.get(baseURL + "/tasks").then((response) => {
      setTasks(response.data);
    });
  };

  const removeTask = (id) => {
    axios
      .delete(baseURL + "/tasks/" + id)
      .then((response) => {
        setTaskData();
        navigate("/home");
      })
      .catch((error) => {
        alert("Error Ocurred in removing task:" + error);
      });
  };

 
  const logout = () =>{
              navigate("/")
  }


  return (
    <div className="col-md-6">
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/add")}
        >
          Add New Task
        </button>

        <button onClick={logout} className="btn btn-danger float-right">Logout</button>
      </nav>

     
      
      <hr></hr>
      <h5>Show All Tasks</h5>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Sr no.</th>
                  <th>Tasks</th>
                  <th>EDIT</th>
                 
                </tr>
              </thead>
              <tbody>
                {tasks &&
                  tasks.map((task1, index) => (
                    <tr>
                      <th scope="row">{task1.id}</th>
                      <td>{task1.task}</td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            removeTask(task1.id);
                          }}
                          className="btn btn-primary"
                        >
                          DELETE
                        </button>
                        <td>
                          <Link to={"/edit/" + task1.id}>EDIT</Link>
                        </td>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks