
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { Routes, Route } from "react-router-dom";
import EditTask from './components/EditTask';
import UserAuthentication from './components/UserAuthentication';
import Registration from './components/Registration';




function App() {
  return (
    <>
    <div className='container'>
       <h1>Task Management System </h1>

      <Routes>
       <Route path="/" element={<UserAuthentication/>}></Route>
        <Route path="registration" element={<Registration/>}> </Route>
        <Route path="/home" element={<Tasks />}></Route>
        <Route path="/add" element={<AddTask />}></Route>
        <Route path="/edit/:id" element={<EditTask />}></Route>
      </Routes>

    </div>
     
    </>
  
  );
}

export default App;
