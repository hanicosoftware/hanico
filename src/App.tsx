import React from 'react';

import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import ProjectCard from './components/ProjectCard/ProjectCard';
import HomeScreen from './Screens/HomeScreen/HomeScreen';



function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <TestComponent />
      <ProjectCard title='Project Title' />

    </div>
  );
}

export default App;
