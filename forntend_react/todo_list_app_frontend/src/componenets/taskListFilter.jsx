import React, { useState } from "react";
import { store, removeTask } from "../redux/store";

function TaskListFilter({filter}){
    const [task, setTask] = useState(store.getState());
    store.subscribe(()=>setTask(store.getState()));

    const handleDetele = (toBeDeletedTaskNum) => {
        store.dispatch(removeTask(toBeDeletedTaskNum));
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