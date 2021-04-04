import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import ProjectCard from './components/ProjectCard/ProjectCard';



function App() {
  return (
    <div className="App">
      <TestComponent />
      <ProjectCard title='Project Title' />

    </div>
  );
}

export default App;
