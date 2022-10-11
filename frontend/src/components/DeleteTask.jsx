import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";

const DeleteTask = (task) => {
    const [token] = useContext(UserContext);

    async function delete_task() {
        const requestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };
        await fetch(`/api/todos/${task.task.id}`, requestOptions);

    }

    return (
        <>
            <i style={{color: 'red', cursor: 'pointer'}} className="trash alternate icon" onClick={delete_task}></i>
        </>
    )
}

export default DeleteTask