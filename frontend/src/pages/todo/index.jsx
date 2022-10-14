import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import AddTask from "../../components/Tasks/AddTask";
import Tasks from "../../components/Tasks/Tasks";

const Todo = () => {
    const navigate = useNavigate()
    const [token] = useContext(UserContext)

    if (!token) {
        navigate('/login')
    }
    return (
        <>
            <section className='todoapp'>
                <div className='ui container'>
                    <h1 className='ui header center'>Todo list</h1>
                    <AddTask/>
                    <Tasks />
                </div>
            </section>
        </>
    )
}
export default Todo