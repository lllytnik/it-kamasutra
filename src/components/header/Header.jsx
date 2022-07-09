import React from "react";
import logo from "../../images/logo/logo.png";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <img className={s.logoImg} src={logo} alt="logo" />
      </div>
    </header>
  );
};
export default Header;
