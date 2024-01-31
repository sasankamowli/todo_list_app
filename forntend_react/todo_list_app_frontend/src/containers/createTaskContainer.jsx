import React, { useState } from "react";

function CreateTaskContainer({task, setTask}) {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        formData.taskName = taskName;
        formData.desc = desc;
        const updatedTask = [...task, formData];
        setTask(updatedTask);
        setTaskName("");
        setDesc("");
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>Task name:</label>
                <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                <label>Description</label>
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
                <input type="submit" value="Create Task" />
            </form>
        </React.Fragment>
    );
};

export default CreateTaskContainer;