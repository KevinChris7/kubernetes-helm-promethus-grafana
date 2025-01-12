import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // Fetch tasks from the backend
        axios.get("http://localhost:5000/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, [tasks]);

    const addTask = () => {
        if (input) {
            axios.post("http://localhost:5000/tasks", { task: input })
                .then(response => {
                    setTasks([...tasks, response.data]);
                    setInput("");
                })
                .catch(error => console.log(error));
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
