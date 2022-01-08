import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData,setLoginData] = useState('')

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
      
        e.preventDefault()
    } 
    return (
        <div>
            <h3>Do Register!</h3>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="name" onBlur={handleOnBlur} placeholder="enter name" /><br />
                <input type="email" name="email" onBlur={handleOnBlur} placeholder="name@example.com" /><br />
                <input type="password" name="password" onBlur={handleOnBlur} placeholder="password" /><br />
                <input type="password" name="password2" onBlur={handleOnBlur} placeholder="Retype password" /><br /><br />
                <input type="submit" value="Register" className="btn btn-primary" />
                <br />
            <Link to="/login">Already you have an account ?</Link>
             </form>
        </div>
    );
};

export default Register;