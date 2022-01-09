import React, { useEffect, useState } from 'react';

const Students = () => {
    const [students,setStudents] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setStudents(data))
    })
    return (
        <div>
            {students.length}
        </div>
    );
};

export default Students;