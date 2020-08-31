import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import Side from './Components/SideBar/Side'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard>
          <Side />
      </Dashboard>
      
    </div>
  );
}

export default App;
