import React, { useState } from "react";

import "./createTaskContainer.css";

function CreateTaskContainer({task, setTask, list}) {
    const [taskNum,setTaskNum] = useState(0);
    const [taskName, setTaskName] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Select");
    const [dueDate, setDueDate] = useState(()=>{
        let yourDate = new Date();
        return yourDate.toISOString().split('T')[0];        
    });
    const [taskNameClass, setTaskNameClass] = useState("hidden");
    const [taskType,setTaskType] = useState("Select");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTaskNum(prevTaskNum=>prevTaskNum+1);
        const taskNameTrimmed = taskName.trim();
        if(taskNameTrimmed.length===0){
            setTaskNameClass("visible");
            return;
        } else {
            setTaskNameClass("hidden");
        }
        const formData = {};
        formData.taskNum = taskNum;
        formData.taskName = taskName;
        formData.desc = desc;
        formData.priority = priority;
        formData.dueDate = dueDate;
        formData.priority = priority;
        formData.taskType = taskType;
        const updatedTask = [...task, formData];
        setTask(updatedTask);
        setTaskName("");
        setDesc("");
        setPriority("Select");
        setDueDate(()=>{
            let yourDate = new Date();
            return yourDate.toISOString().split('T')[0];        
        });
        setTaskType("Select");
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">Task name:</label>
                <input type="text" 
                name="taskName" 
                onChange={(e) => setTaskName(e.target.value)} 
                value={taskName} />
                <p className={taskNameClass}>Task Name cannot be empty</p>
                <br />
                <label htmlFor="desc">Description</label>
                <input type="text" 
                name="desc" 
                onChange={(e) => setDesc(e.target.value)} 
                value={desc} />
                <br />
                <label htmlFor="priority">Priority</label>
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
                <label htmlFor="taskType">Select task type</label>
                <select name="taskType" onChange={(e) => setTaskType(e.target.value)} value={taskType}>
                    <option value="Select">Select</option>
                    {list.map((element,index)=>
                        <option value={element} key={index}>{element}</option>
                    )}
                </select>
                <br />
                <input type="submit" value="Create Task" />
            </form>
        </React.Fragment>
    );
};

export default CreateTaskContainer;