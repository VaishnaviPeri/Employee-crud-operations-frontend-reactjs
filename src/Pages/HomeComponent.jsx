import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function HomeComponent() {

    const [employees, setEmployees] = useState([])
    const { id } = useParams()

    // avoids unccessary re-renders in the browser.
    useEffect(() => {
        console.log("code works fine");
        displayUsers();
        // loadEmployee();
    }, [])

    // useEffect(()=>{
    //     loadEmployees();
    // },[])

    // to connect the backend with react using axios and fetching the data of all the users.
    // also displaying the users in console and storing in the servent variable.
    const displayUsers = async () => {
        const result = await axios.get("http://localhost:8080/employees/getemployees");
        console.log(result.data);
        setEmployees(result.data);

    };


    const deleteEmployee = async (id) => {
        try {
            console.log("deleting user with id", id);
            await axios.delete(`http://localhost:8080/employees/deleteEmployee/${id}`)
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
        } catch (error) {
            console.log("error while deleting employee");

        }
    }

    // const loadEmployee = async () => {
    //     const result = await axios.get(`http://localhost:8080/employees/deleteEmployee/${id}`)
    //     setEmployees(result.data);
    // }


    //rendering part
    return (
        <div>
            <div className="container">
                <div className="py-4"></div>
                <table className="table border shadow">
                    <thead>
                        {/* simple table with headings */}
                        <tr >
                            <th scope='col'>Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            // to map the elements from Employee table to employee jsx

                            employees.map((employee, index) => (
                                <tr key={index}>
                                    <th scope='row' >{index + 1}</th>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    {/* buttons for the crud operations */}
                                    <td>
                                        <Link className='btn btn-info mx-2' to={`/viewEmployee/${employee.id}`}>View</Link>
                                        <Link className="btn btn-secondary mx-2"
                                            to={`/editEmployee/${employee.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>



                    {/* for loop cant be used since jsx expects return statement which for loopmdoesnt return.
                        so use .MAP() instead which maps the elements of old list to new list and returns new list. */}
                    {/* <tbody>
                        {
                        for (let index = 0; index < employees.length; index++) {
                            const employee = employees[index];

                        <tr >
                            <td>{employee.firstName} </td>
                            <td>{employee.lastName} </td>
                            <td>{employee.emailId}</td>
                        </tr>
                         
                        }
                    }
                    </tbody> */}

                </table>


            </div>
        </div>
    );
}

export default HomeComponent;