import React, { useState } from "react";

function CreateTaskContainer({task, setTask}) {
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Select");
    const [dueDate, setDueDate] = useState(()=>{
        let yourDate = new Date();
        return yourDate.toISOString().split('T')[0];        
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        formData.taskName = taskName;
        formData.desc = desc;
        formData.priority = priority;
        formData.dueDate = dueDate;
        formData.priority = priority;
        const updatedTask = [...task, formData];
        setTask(updatedTask);
        setTaskName("");
        setDesc("");
        setPriority("Select");
        setDueDate(()=>{
            let yourDate = new Date();
            return yourDate.toISOString().split('T')[0];        
        });
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">Task name:</label>
                <input type="text" 
                name="taskName" 
                onChange={(e) => setTaskName(e.target.value)} 
                value={taskName} />
                <br />
                <label htmlFor="desc">Description</label>
                <input type="text" 
                name="desc" 
                onChange={(e) => setDesc(e.target.value)} 
                value={desc} />
                <br />
                <label htmlFor="priority" defaultValue={priority}>Priority</label>
                <select name="priority" onChange={(e) => setPriority(e.target.value)} value={priority} >
                    <option value="Select">Select</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <br />
                <label htmlFor="dueDate">Due Date</label>
                <input type="date" name="dueDate" onChange={(e)=>setDueDate(e.target.value)} value={dueDate} />
                <br />
                <input type="submit" value="Create Task" />
            </form>
        </React.Fragment>
    );
};

export default CreateTaskContainer;