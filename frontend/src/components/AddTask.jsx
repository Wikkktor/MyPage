import React, {useContext, useState} from "react";
import ErrorMessage from "./ErrorMessage";
import {UserContext} from "../context/UserContext";

const AddTask = () => {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [token] = useContext(UserContext);

    async function add_new_task() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
                title: task,
                priority: priority,
            })
        };
        const response = await fetch("/api/todos/", requestOptions);
        const data = await response.json()

        if (!response.ok) {
            setErrorMessage(data.detail)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.length > 2 && priority < 6 && priority > 0) {
            add_new_task()
            setErrorMessage("")
            setTask("")
            setPriority("")
        } else if (priority > 5 || priority < 1) {
            setErrorMessage("Priority must be between 1 - 5")
        } else {
            setErrorMessage("Your task should be a little longer...")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{background: 'transparent'}} className="ui form todoform">
                <div className="field">
                    <input type="text"
                           value={task}
                           onChange={(e) => setTask(e.target.value)}
                           placeholder="Enter your task"/>
                    <div className='responsive_form'>
                        <input type='number'
                               value={priority}
                               onChange={(e) => setPriority(e.target.value)}
                               placeholder='priority'/>
                        <button className='ui button todo_submit' type='submit'>
                            Add
                        </button>
                    </div>
                </div>
                <ErrorMessage message={errorMessage}/>
            </form>
        </>
    )
}
export default AddTask