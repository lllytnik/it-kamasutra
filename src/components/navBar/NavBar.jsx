import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.navLink);
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={setActive} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={setActive} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={setActive} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={setActive} to="/ettings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
