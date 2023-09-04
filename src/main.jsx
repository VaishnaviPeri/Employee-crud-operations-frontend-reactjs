import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
// import NavbarComponent from './Layout/NavbarComponent.jsx';
// import HomeComponent from './Pages/HomeComponent';
// import AddEmployeeComponent from './EmployeeComponents/AddEmployeeComponent';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <NavbarComponent/>
//       <Route path="/" element={<NavbarComponent />} />
//       <Route path="/home" element={<HomeComponent />} />
//       <Route path="/createEmployee" element={<AddEmployeeComponent />} />
//     </Route>
//   ),
// )

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
)
