import React from "react";

import TaskListAll from "../componenets/taskListAll";
import TaskListFilter from "../componenets/taskListFilter";

function TaskListContainer({filter}){
    if(filter==="All"){
        return(
            <TaskListAll />
        )
    } else{
        return(
            <TaskListFilter filter={filter} />
        )
    }
}

export default TaskListContainer;