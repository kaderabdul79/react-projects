import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = () => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">name</h5>
                <p className="card-text">email</p>
                <Link to="">Edit</Link><br />
                <Link to="">Delete</Link>
            </div>
        </div>
    );
};

export default StudentCard;