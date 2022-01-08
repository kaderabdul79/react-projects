import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3>Do Login!</h3>
            <div class="mb-3">
                <input type="email" placeholder="name@example.com" />
            </div> 
            <div class="mb-3">
                <input type="password" placeholder="password" />
            </div>
            <button type="button" value="Login" class="btn btn-primary">Login</button>
            <br />
            <Link to="/register">Create an account ?</Link>
            
        </div>
    );
};

export default Login;