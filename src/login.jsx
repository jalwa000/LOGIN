import React, { useState } from 'react';
import  Failure from './failure';
import  Success  from './success';

 function Login() {
     const [isLoggedin, setIsloggedin] = useState(false);
     const [user, setUser] = useState({})
     const [users, setUsers] = useState([
         {
         id: '1',
         name: "noor",
         password: '1234'
     },
     {
        id: '2',
        name: "Hamid",
        password: '4321'
    },
    {
        id: '3',
        name: "Farshid",
        password: '5678'
    }

    ])
    const handleChange = e =>{
        setUser({ ...user, [e.target.name]: e.target.value})
    };


    return (
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
                users.map(u => {
                    u.name === user.name && u.password === user.password && 
                        setIsloggedin(true)
                });

               /*  isLoggedin ? console.log("you are successfully logged in") : console.log("Sorry") */
            }}>
                <label >Name:</label>
                <input className="rounded-pill border border-danger" type="text" name="name" onChange={handleChange} />
                <label >Password:</label>
                <input className="rounded-pill border border-danger" type="text" name="password" onChange={handleChange} />
                <input className="rounded-pill btn btn-danger " type="submit" value="Login"/>
            </form>

        {isLoggedin ? <Success /> : <Failure />}
        </div>
    )
}

 export default Login
