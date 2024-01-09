import React from "react";
//import userdetails from "../userdetails";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = () => {
    localStorage.setItem(username, password);

    alert("register successfully");
  };


return (
    <div>
      <h3>Registration </h3>
      {/* <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>{" "}
        <br></br>
        <input
          type="password"
          value={password}
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br></br>
        <input type="submit" value="Registration"></input>
      </form>
      <Link to={"/"}>Login </Link> */}




      <form onSubmit={handleRegister}>

<div className="form">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control" id="username1" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign-up</button>
</div>
    
</form>

<Link to={"/"}>Login </Link>
    </div>
  );
};

export default Registration;