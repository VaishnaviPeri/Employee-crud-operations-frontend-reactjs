import React from 'react';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Pages/HomeComponent';
import NavbarComponent from './Layout/NavbarComponent';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployeeComponent from './EmployeeComponents/AddEmployeeComponent';
import EditEmployeeComponent from './EmployeeComponents/EditEmployeeComponent';
import ViewEmployeesComponent from './EmployeeComponents/ViewEmployeesComponent';



function App() {

  return (
    <>
      <div className='App'>
        <Router>
          {/* <NavbarComponent /> */}
          <Routes>
            <Route path='/' element={<NavbarComponent />} />
            <Route path='home' element={<HomeComponent />} />
            <Route path='addEmployee' element={<AddEmployeeComponent />} />
            <Route path='editEmployee/:id' element={<EditEmployeeComponent />} />
            <Route path='viewEmployee/:id' element={<ViewEmployeesComponent />} />
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
