import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './views/Routes';


function App() {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-purple-500 py-8 px-4 md:px-0 min-h-screen flex items-center justify-center">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
