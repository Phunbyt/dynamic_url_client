import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
function App() {
  const [count, setCount] = useState(0);
  console.log(window.location);
  let protocol = window.location.protocol;
  const subDomain = window.location.href
    .split(protocol + '//')[1]
    .split('.')[0] || 'localhost';
  console.log(subDomain, "hghghghg");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              subDomain !== 'localhost' ? <UserPage username={subDomain} /> : <Home />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
