import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../screens/Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
