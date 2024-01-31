import React from "react";

import TaskListAll from "../componenets/taskListAll";
import TaskListFilter from "../componenets/taskListFilter";

function TaskListContainer({task, setTask, filter}){
    if(filter==="All"){
        return(
            <TaskListAll task={task} setTask={setTask} />
        )
    } else{
        return(
            <TaskListFilter task={task} setTask={setTask} filter={filter} />
        )
    }
}

export default TaskListContainer;