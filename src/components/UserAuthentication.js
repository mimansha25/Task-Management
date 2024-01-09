import React from "react";
import { useState } from "react";
import {  useNavigate, Link } from "react-router-dom";

const UserAuthentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = () => {
    const user = localStorage.getItem(username);
    console.log(user);

    if (user) {
      if (user === password) {
        
        navigate("/home");
      } else {
        alert("wrong password");
      }
    } else {
      alert("user not found");
    }
  };

return (
    <div>
      <h3 >Login </h3>
    
            <div className="container ">


            <form onSubmit={handleSubmit}>

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
                            <button type="submit" className="btn btn-primary">Login</button>
                </div>
                    
                </form>
            </div>
            <Link to={"registration"}>Registration</Link>
     
    </div>
  );
};

export default UserAuthentication;