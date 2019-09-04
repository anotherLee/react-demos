import React from 'react';
import './App.css';
import Head from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Head/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
