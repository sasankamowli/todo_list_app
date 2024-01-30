import React, { useEffect } from "react";

function DisplayTasksContainer({task}) {
    useEffect(()=> {console.log(typeof task);
        console.log(task);
    })
    return (
        <React.Fragment>
            <ol>
                {task.map((element) => 
                    <ul>
                        <li>Task Name: {element.taskName}</li>
                        <li>Task Description: {element.desc}</li>
                    </ul>
                )}
            </ol>
        </React.Fragment>
    );
};

export default DisplayTasksContainer;