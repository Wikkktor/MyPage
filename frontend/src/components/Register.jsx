import React, {useContext, useState} from "react";

import {UserContext} from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                first_name: first_name,
                last_name: last_name,
                password: password,
                phone_number: phone_number
            })
        };
        const response = await fetch("/api/users/", requestOptions);
        const data = await response.json()

        if (!response.ok){
            setErrorMessage(data.detail);
        } else {
            setToken(data.access_token)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length > 5){
            submitRegistration()
        } else {
            setErrorMessage("Password must be greater than 5 charactes");
        }

    }

    return (<div className="column">
        <form className="box" onSubmit={handleSubmit}>
            <h1 className="title has-text-centered">Register</h1>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input
                        type='text'
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        required
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input
                        type='text'
                        placeholder='Enter your first name'
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                        className="input"
                        required
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input
                        type='text'
                        placeholder='Enter your last name'
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        className="input"
                        required
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        type='password'
                        placeholder='Enter your username'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Phone number</label>
                <div className="control">
                    <input
                        type='tel'
                        placeholder='Enter your username'
                        value={phone_number}
                        onChange={(e) => setPhone_number(e.target.value)}
                        className="input"
                        required
                    />
                </div>
                <ErrorMessage message={errorMessage}/>
            </div>
            <button className="button is-primary" type="submit">
                Register
            </button>
        </form>
    </div>)
}

export default Register