import React, { useEffect } from "react";

function DisplayTasksContainer({task}) {
    useEffect(()=> {console.log(typeof task);
        console.log(task);
    })
    return (
        <React.Fragment>
            <ol>
                {task.map((element, index) => 
                    <li key={index}>
                        <ul>
                            <li>Task Name: {element.taskName}</li>
                            <li>Task Description: {element.desc}</li>
                        </ul>
                    </li>
                )}
            </ol>
        </React.Fragment>
    );
};

export default DisplayTasksContainer;