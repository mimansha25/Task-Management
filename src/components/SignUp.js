import React from 'react'
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import userdetails from "../userdetails";
import { Link } from 'react-router-dom';
const SignUp = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
  
    const handleSubmit = () => {
      alert("submitted the form" + username + " " + password);
  
      const user = userdetails.push(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        
        alert("correct user");
        navigate("/");
  
      } else {
        console.log("not successfull, login failed");
        alert("incorrect user");
        
      }
    }
  return (
    <div>

    <h1>Sign Up </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>{" "}
            <br></br>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>{" "}
            <br></br>
            <input type="submit" value="Login"></input>
          </form>
    
          <Link to={"registration"}>Registration</Link>
        </div>
  )
}

export default SignUp