import React from "react";
import { authenticateUser, singupUser, signoutUser } from "./actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style.scss'


const Login = ()=>{

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch  = useDispatch();
    const signinUser = authenticateUser({email: email, password: password}, navigate);
    const signupUser = singupUser({email: email, password: password}, navigate);
    const signout = signoutUser();


    const emailChange =(event) =>{
        console.log('called email');
        setEmail(event.target.value);
    }

    const passwordChange = (event)=>{
        console.log('called pass');
        setPassword(event.target.value);
    }

    return(
        <div>
            <h1>Welcome! Let us Blog</h1>
            <div className="centerContents">
                <div className="login">
                    <h3 className="direct">Create an Account, or Login</h3>
                    <label htmlFor="" value={email}>
                        Email:
                        <input type="text" onChange={emailChange}/>
                    </label>
                    <label htmlFor="">
                        Password:
                        <input type="text" value={password} onChange= {passwordChange}/>
                    </label>
                </div>
                <div className="buttons">
                    <button onClick={()=>{signinUser(dispatch)}}>Login</button>
                    <button onClick={()=>{signupUser(dispatch)}}>SingUp</button>
                </div>
            </div>
        </div>
    )
}

export default Login;