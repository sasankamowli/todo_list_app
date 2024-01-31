import React from "react";

function TaskListFilter({task, setTask, filter}){
    const handleDetele = (toBeDeletedTaskNum) => {
        const updatedTask = task.filter((element) => element.taskNum!==toBeDeletedTaskNum);
        setTask(updatedTask);
    }

    return(
        <React.Fragment>
            <h3>{filter}</h3>
            {task.filter(element=>element.taskType===filter).map(
                (element, index) => 
                <li key={index}>
                    <p>Task Name: {element.taskName}</p>
                    <p>Task Description: {element.desc}</p>
                    <p>Priority: {element.priority}</p>
                    <p>Due Date: {element.dueDate}</p>
                    <button onClick={()=>handleDetele(element.taskNum)}>Delete</button>
                </li>
            )}
        </React.Fragment>
    )
};

export default TaskListFilter;