import React, { useState } from "react";
import TaskListContainer from "./taskListContainer";

function DisplayTasksContainer({list}) {
    const [filter, setFilter] = useState("All");

    return (
        <React.Fragment>
            <label htmlFor="filter">Select filter</label>
            <select value={filter} name="filter" onChange={(e)=>setFilter(e.target.value)}>
                <option value="All">All</option>
                {list.map((element, index)=>
                    <option value={element} key={index}>{element}</option>
                )}
            </select>
            <TaskListContainer filter={filter} />
        </React.Fragment>
    );
};

export default DisplayTasksContainer;