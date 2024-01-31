import React from "react";

function DisplayTasksContainer({task, setTask}) {
    const handleDetele = (toBeDeletedIndex) => {
        const updatedTask = task.filter((element, index) => index!==toBeDeletedIndex);
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
                        <button onClick={()=>handleDetele(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </React.Fragment>
    );
};

export default DisplayTasksContainer;