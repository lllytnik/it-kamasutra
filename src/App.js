import React from "react";
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/main/Main";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__container">
          <Header />
          <NavBar />
          <Main
            messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} posts={props.state.profilePage.posts} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
