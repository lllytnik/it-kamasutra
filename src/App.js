import React from "react";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <Header />
          <NavBar />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
