import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData] = useState('')
    const {user} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }
    {
        console.log({user})
    }
    const handleLoginSubmit = e => {
       
        e.preventDefault()
    } 
    return (
        <div>
            <h3>Do Login!</h3>
            <form>
             <input type="email" name="email" onBlur={handleOnBlur} placeholder="name@example.com" /><br />
             <input type="password" name="password" onBlur={handleOnBlur} placeholder="password" /><br /><br />
            <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            <br />
            <Link to="/register">Create an account ?</Link><br />
            <button type="button" className="btn btn-secondary">Signin Using Google</button>
        </div>
    );
};

export default Login;