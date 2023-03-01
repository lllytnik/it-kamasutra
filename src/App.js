import React from "react";
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import { Routes, Route } from "react-router-dom";
import Profile from "./components/proFile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App(props) {
  debugger
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path="/profile" element={<Profile store={props.store} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
