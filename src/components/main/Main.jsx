import React from "react";
import { Routes, Route } from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import Profile from "../proFile/Profile";
import News from "../news/News";
import s from "./Main.module.css";

const Main = () => {
  return (
    <main className={s.main}>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs/*" element={<Dialogs />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </main>
  );
};
export default Main;
