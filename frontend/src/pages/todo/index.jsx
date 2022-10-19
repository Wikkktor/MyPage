import React from "react";
import AddTask from "../../components/Tasks/AddTask";
import Tasks from "../../components/Tasks/Tasks";

const Todo = () => {

    return (
      <>
        <section className="todoapp">
          <div className="ui container">
            <h1 className="ui header center">Todo list</h1>
            <AddTask />
            <Tasks />
          </div>
        </section>
      </>
    );
  }
export default Todo;
