import React from 'react'
import './App.css'

import ErrorBoundary from './utiity/errorBoundary.jsx';
import CreateTaskContainer from './containers/createTaskContainer.jsx';
import DisplayTasksContainer from './containers/displayTasksContainer.jsx';

function App() {

  return (
    <React.Fragment>
      <ErrorBoundary>
        <CreateTaskContainer />
        <DisplayTasksContainer />
      </ErrorBoundary>
    </React.Fragment>
  )
}

export default App
