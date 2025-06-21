import React from "react";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    return (
        <div className = "container">
            <div className="box">
            <img src="/printlab_logo.png" alt="Print Lab Logo" className="logo"/>
            <h1 className="center">Login First Please</h1>
             <form>
                <div>
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username"/><br/>
                </div>
                <div>
                <label htmlFor="Password">Password</label>
                <input type="text" placeholder="Password"/><br/>
                </div>
                <button onClick={()=> navigate('/landing')}>Login</button>
             </form>
             </div>
        </div>
    );
}

export default LoginPage;