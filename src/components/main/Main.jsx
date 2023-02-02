import React from "react";
import { Routes, Route } from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import Profile from "../proFile/Profile";
import News from "../news/News";
import s from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/profile" element={<Profile posts={props.posts} />} />
        <Route path="/dialogs/*" element={<Dialogs messages={props.messages} dialogs={props.dialogs} />} />
      </Routes>
    </main>
  );
};
export default Main;
