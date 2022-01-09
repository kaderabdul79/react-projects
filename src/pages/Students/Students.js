import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';

const Students = () => {
    const [students,setStudents] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setStudents(data))
    })
    return (
        <div>
            {students.map(student => <Student key={student.id} student={student}></Student>)}
        </div>
    );
};

export default Students;