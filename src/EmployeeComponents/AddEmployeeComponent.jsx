import React, { useState } from 'react';
import './AddEmployeeComponent.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEmployeeComponent() {

    let navigate = useNavigate()

    const [Employee, setEmployee] = useState({
        firstName: " ",
        lastName: " ",
        emailId: " "
    })



    const OnInputChange = (event) => {
        setEmployee({ ...Employee, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/employees/addemployees", Employee);
        console.log(response.data);
        navigate("/home")
    }

    const onCancelHandler = (event) => {
        event.preventDefault();
        navigate('/navbar')
    }


    return (

        <div className='container'>
            <h2 className="heading">Regsiter New Employee</h2>

            <form >
                <div className='mb-3'>
                    <label htmlFor='firstName' className='mt-4' >First Name : </label>
                    <input
                        type='text'
                        name='firstName'
                        onChange={OnInputChange}
                        placeholder='enter first Name'
                        value={Employee.firstName} />

                    <br />

                    <label htmlFor='lastName' >Last Name : </label>
                    <input type='text'
                        name='lastName'
                        onChange={OnInputChange}
                        placeholder='enter Last Name'
                        value={Employee.lastName} />


                    <br />

                    <label htmlFor='emailId' >Email Id : </label>
                    <input type='text'
                        name='emailId'
                        onChange={OnInputChange}
                        placeholder='enter emailId'
                        value={Employee.emailId} />


                    <br />
                    <button type='submit' onClick={onSubmitHandler} className="btn btn-outline-primary">Register Here !</button>
                    <br />
                    <button type='submit' onClick={onCancelHandler} className="btn btn-outline-danger mt-2">Cancel</button>
                    {/* else without using the button type and the handler we can directly use <Link>
                      to navigate to the required path */}
                    {/* <Link className="btn btn-outline-danger mt-2" to="/navbar"> Cancel </Link> */}
                </div>
            </form>
        </div>


    );
}

export default AddEmployeeComponent;