import { useState } from "react";


export default function Task({ addTask }) {

    const [task, setTask] = useState({
        name: "",
        description: "",
        assignee: "",
        status: "",
    });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({ name: "", description: "", status: "" });
    };





    return (
        <><h1>Task</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Create Task
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={task.name}
                        onChange={handleChange}

                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={task.description}
                        onChange={handleChange}

                    />

                    {/* add assignee dropdwon and assosiate with task */}
                    <input
                        type="text"
                        name="status"
                        placeholder="status"
                        value={task.status}
                        onChange={handleChange}

                    />
                </label>
                <button>Create Task</button>
                {/* add task to todo  by changing state status to "todo" on click*/}
            </form></>
    );
}

