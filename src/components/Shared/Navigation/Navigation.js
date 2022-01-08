import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Students Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <div className="customstyle">
                <ul className="navbar-nav">
                    <li className="nav-item customstyleli">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item customstyleli">
                        <Link to="/class">JoinClass</Link>
                    </li>
                    <li className="nav-item customstyleli">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="nav-item customstyleli">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;