import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
