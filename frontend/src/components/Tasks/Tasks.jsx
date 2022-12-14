import React, { useContext, useState } from "react";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";

const Tasks = () => {
  const navigate = useNavigate();
  const [token] = useContext(UserContext);
  const [tasks, setTasks] = useState(null);

  async function getTasks() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(
      "https://wikkktor.herokuapp.com/api/todos/",
      requestOptions
    );
    const data = await response.json();
    setTasks(data);
  }
  useEffect(() => {
    if (token) {
      getTasks();
    } else {
      navigate("/login");
    }
  }, [tasks]);

  if (token && tasks) {
    return (
      <>
        {tasks
          .sort((a, b) => b.priority - a.priority)
          .map((task) => (
            <div key={task.id} className="ui segment" id="todolist">
              <div id="text_todo">
                <span id="priority">{task.priority}</span>
                <span>{task.title}</span>
              </div>
              <div>
                <DeleteTask task={task} />
                <UpdateTask task={task} />
              </div>
            </div>
          ))}
      </>
    );
  }
};
export default Tasks;
