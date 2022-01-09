import React from 'react';

const Student = (props) => {
    const {id,name,email} = props.student
    return (
        <div>
            {id}
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    );
};

export default Student;