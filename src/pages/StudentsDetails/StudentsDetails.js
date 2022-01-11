import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentsDetails = () => {
    const {id} = useParams()
    const [students,setStudents] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setStudents(data))
    })
    return (
        <div>
            <h3>{students.name}</h3>
            <h3>{students.email}</h3>
        </div>
    );
};

export default StudentsDetails;