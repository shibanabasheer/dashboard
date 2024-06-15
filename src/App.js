import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

