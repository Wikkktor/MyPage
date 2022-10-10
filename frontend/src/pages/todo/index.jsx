import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import AddTask from "../../components/AddTask";
import Tasks from "../../components/Tasks";

const Todo = () => {
    const navigate = useNavigate()
    const [token] = useContext(UserContext)

    if (!token) {
        navigate('/login')
    }
    return (
        <>
            <section className='todoapp'>
                <div className='ui grid stackable'>
                    <div className="four wide column"></div>

                    <div className="eight wide column">
                        <h1 className='ui header center'>Todo list</h1>
                        <AddTask/>
                        <Tasks/>
                    </div>
                    <div className="four wide column"></div>
                </div>
            </section>
        </>
    )
}
export default Todo