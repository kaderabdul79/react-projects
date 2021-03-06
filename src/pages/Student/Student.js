import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Student = (props) => {
    const {id,name,email} = props.student;
    const history = useHistory();
    const goForDetails = () => {
        history.push(`/students/${id}`)
    }
    return (
        <div className="card" style={{w8idth: '1rem',display:'flex',backgroundColor:'tan'}}>
        <div className="card-body" >
            <h5 className="card-title">{id}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">{name}</p>
            <Link to=""><button className="btn btn-primary">View</button></Link>
            <button onClick={goForDetails} className="btn btn-primary">View</button>
            <Link to=""><button className="btn btn-secondary">Edit</button></Link>
            <Link to=""><button className="btn btn-danger">Delete</button></Link>
        </div>
    </div>
    );
};

export default Student;