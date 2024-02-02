import React, { useState } from "react";
import { store, removeTask } from "../redux/store";

function TaskListAll(){
    const [task, setTask] = useState(store.getState());
    store.subscribe(()=>setTask(store.getState()));

    const handleDetele = (toBeDeletedTaskNum) => {
        store.dispatch(removeTask(toBeDeletedTaskNum));
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