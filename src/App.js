import React from "react";
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Profile from "./components/proFile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <Header />
          <NavBar />
          <main className="main">
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
              <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
