import React from "react";
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Profile from "./components/proFile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App(props) {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
