import React, {useContext, useEffect, useState} from "react";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import {UserContext} from "../context/UserContext";

const Tasks = () => {
    const [token] = useContext(UserContext)
    const [tasks, setTasks] = useState(null)

    async function getTasks() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }
        };
        const response = await fetch('/api/todos/', requestOptions);
        const data = await response.json()
        setTasks(data)

    }

    useEffect(() => {
        getTasks()
    }, [getTasks])

    if (tasks) {
        return (
            <>
                {tasks.map((task) => (
                    <div className="ui segment" id='todolist'>
                        <div id='text_todo'>
                            <span id='priority'>{task.priority}</span>
                            <span>{task.title}</span>
                        </div>
                        <div>
                            <DeleteTask
                                task={task.id}
                            />
                            <UpdateTask
                                task={task.id}
                            />
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
export default Tasks