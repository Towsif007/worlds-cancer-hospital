import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'





const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] =useState('')

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    const handleRegistration = e =>{
        e.preventDefault()
        console.log(email, password);
        if(password.length < 8){
            setError('Password must be 8 carecter long.')
            return
        }
        if(!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password)){
            setError("Password must contain at least one upper case, one lower case, one digit and should contain at least 8 from the mentioned characters")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }




    return (
        <div className="login mt-4">
            <div>
            <h2>Please Login</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                    <br/> <br/>
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Password" required /> 
                    <br /> <br/>
                    <div className="text-danger">{error}</div>
                    <input type="submit" value="Submit" />
                </form>
                <p>New to hospital webpage? <Link to="/register">Create Account</Link> </p>
            </div>
            <div>-------------OR-----------------</div>
            <div>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;





