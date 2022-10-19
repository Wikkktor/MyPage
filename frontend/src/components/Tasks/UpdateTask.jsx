import React, {useContext, useState} from "react";
import ErrorMessage from "../UI/ErrorMessage";
import {UserContext} from "../../context/UserContext";
import { createPortal } from "react-dom";

const UpdateTask = (task) => {
    const [updateTitle, setUpdateTitle] = useState(task.task ? task.task.title : "")
    const [updatePriority, setUpdatePriority] = useState(task.task ? task.task.priority : "")
    const [errorMessage, setErrorMessage] = useState("");
    const [token] = useContext(UserContext);
    const [openModal, setOpenModal] = useState(false)

    async function update_task() {

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
                title: updateTitle,
                priority: updatePriority,
            })
        };
        const response = await fetch(`https://wikkktor.herokuapp.com/api/todos/${task.task.id}`, requestOptions);
        const data = await response.json()
        if (!response.ok) {
            setErrorMessage(data.detail)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (updateTitle.length > 2 && updatePriority < 6 && updatePriority > 0) {
            update_task();
            setErrorMessage("");
            setOpenModal(false);
        } else if (updatePriority > 5 || updatePriority < 1) {
            setErrorMessage("Priority must be between 1 - 5")
        } else {
            setErrorMessage("Your task should be a little longer...")
        }
    }

    return (
        <>
            <i style={{color: 'black', cursor: 'pointer'}} className="edit icon" onClick={() => {
                setOpenModal(true)
            }}></i>
            {createPortal(openModal &&
                <div className='my-modal'>
                    <div className='modal-container'>
                        <div style={{display:"flex"}}>
                            <i className="close icon" style={{color:'black'}} onClick={() => {
                                setOpenModal(false)
                            }}></i>
                            <h2 style={{margin:0, color:'black'}}>
                                Update your task
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit} style={{background: 'transparent', textAlign: 'end'}}
                              className="ui form">
                            <div className="field" style={{textAlign: 'left'}}>
                                <input type="text"
                                       defaultValue={task.task.title}
                                       onChange={(e) => setUpdateTitle(e.target.value)}
                                       placeholder="Enter your task"/>
                                <input type='number'
                                       defaultValue={task.task.priority}
                                       onChange={(e) => setUpdatePriority(e.target.value)}
                                       placeholder='priority'/>
                                <ErrorMessage message={errorMessage}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "end"}}>
                                <button className='ui button todo_cancel' onClick={() => {
                                setOpenModal(false)
                            }}>
                                    Cancel
                                </button>
                                <button className='ui button todo_submit' type='submit'>
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>, document.getElementById("overlays")
            )}
        </>
    )
}
export default UpdateTask