import React, { useState, useEffect } from 'react';
import { getGreeting } from './ApiService';
import Login from './components/Login';
import MainScreen from "./components/MainScreen";
import './App.css';

function App() {
  const [greeting, setGreeting] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Here you'd usually check the username and password, maybe make an API call
    // For this example, I'm just setting isLoggedIn to true without any check
    setIsLoggedIn(true);
  };

  useEffect(() => {
    async function fetchData() {
      const { message } = await getGreeting();
      setGreeting(message);
    }
    fetchData();
  }, []);


  return (
      <div className="App">
        {!isLoggedIn && <h1>{greeting}</h1>}
        {/* Add other components or UI elements as needed */}
        {isLoggedIn ? <MainScreen /> : <Login onLogin={handleLogin}/>}
      </div>
      // <div className="App">
      //   <Login />
      // </div>
  );
}

export default App;

