import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    
    return (
        <div className="login mt-4">
            <div>
                <h2>Please Create a new account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">LogIn</Link></p>
            </div>

        </div>
    );
};

export default Register;

