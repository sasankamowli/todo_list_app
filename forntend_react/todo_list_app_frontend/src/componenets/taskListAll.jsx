import React from "react";

function TaskListAll({task, setTask}){
    const handleDetele = (toBeDeletedTaskNum) => {
        const updatedTask = task.filter((element) => element.taskNum!==toBeDeletedTaskNum);
        setTask(updatedTask);
    }

    return (
        <React.Fragment>
            <ol>
                {task.map((element, index) => 
                    <li key={index}>
                        <p>Task Name: {element.taskName}</p>
                        <p>Task Description: {element.desc}</p>
                        <p>Priority: {element.priority}</p>
                        <p>Due Date: {element.dueDate}</p>
                        <p>Task type: {element.taskType}</p>
                        <button onClick={()=>handleDetele(element.taskNum)}>Delete</button>
                    </li>
                )}
            </ol>
        </React.Fragment>
    );
};

export default TaskListAll;