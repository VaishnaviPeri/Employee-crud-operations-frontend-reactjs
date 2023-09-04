import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

function NavbarComponent() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">Employee Management</a>
                    <Link className="btn btn-outline-light" to="/home">Employee List</Link>
                    <Link className="btn btn-outline-light" to="/addEmployee">Register Employee</Link>

                </div>
            </nav>

        </div>
    );
}

export default NavbarComponent;