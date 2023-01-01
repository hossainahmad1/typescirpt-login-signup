import React from 'react';
import './App.css';
import Navber from './components/Navber';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
