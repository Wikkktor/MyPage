import React, {useContext, useState} from "react";

import {UserContext} from "../../context/UserContext";
import ErrorMessage from "../../components/UI/ErrorMessage";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const submitRegistration = async () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            })
        };
        const response = await fetch("https://wikkktor.herokuapp.com/api/users/", requestOptions);
        const data = await response.json()

        if (!response.ok) {
            setErrorMessage(data.detail);
        } else {
            setToken(data.token)
            navigate('/')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length > 5 && password === password2) {
            submitRegistration()
        } else if (password.length < 6) {
            setErrorMessage("Password must be greater than 5 characters");
        } else {
            setErrorMessage("Password don't match")
        }

    }

    return (
        <div className='ui container' style={{marginTop: "20vh"}}>
            <div className="ui grid stackable">
                <div className='three wide column'></div>
                <div className="ten wide column">
                    <form className="ui form" onSubmit={handleSubmit}>
                        <h1 className="ui header" style={{textAlign: "center"}}>Register</h1>
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
                            <label className="label">Password again</label>
                            <div className="control">
                                <input
                                    type='password'
                                    placeholder='Enter your username'
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="input"
                                    required
                                />
                            </div>
                        </div>
                        <ErrorMessage message={errorMessage}/>
                        <div style={{width: '100%', textAlign: 'center'}}>
                                    <button className="ui inverted button" type="submit">Register</button>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage