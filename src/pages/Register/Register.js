import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Do Register!</h3>
            <div class="mb-3">
                <input type="text" placeholder="enter name" />
            </div>
            <div class="mb-3">
                <input type="email" placeholder="name@example.com" />
            </div> 
            <div class="mb-3">
                <input type="password" placeholder="password" />
            </div>
            <div class="mb-3">
                <input type="password" placeholder="Retype password" />
            </div>
            <button type="button" value="Register" class="btn btn-primary">Register</button>
            <br />
             <Link to="/login">Already you have an account ?</Link>

        </div>
    );
};

export default Register;