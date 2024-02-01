import React, {useState} from 'react'
import './App.css'

import ErrorBoundary from './utiity/errorBoundary.jsx';
import CreateTaskContainer from './containers/createTaskContainer.jsx';
import DisplayTasksContainer from './containers/displayTasksContainer.jsx';

function App() {
  const [task, setTask] = useState([]);
  const [list, setList] = useState(["work", "personal", "shopping"]);

  return (
    <React.Fragment>
      <ErrorBoundary>
        <CreateTaskContainer task={task} setTask={setTask} list={list} />
        <br />
        <DisplayTasksContainer task={task} setTask={setTask} list={list} />
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default App
