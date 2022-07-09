import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";
const setActive = ({ isActive }) => (isActive ? s.activeLink : s.dialogLink);
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink className={setActive} to={path}>
        {" "}
        {props.name}{" "}
      </NavLink>
    </div>
  );
};

const Dialog = () => {
  return (
    <div className={s.dialog}>
      <ul className={s.dialogList}>
        <li className={s.dialogIist}>
          <DialogItem id="1" name="Димон" />
        </li>
        <li className={s.dialogIist}>
          <DialogItem id="2" name="Оксимирон" />
        </li>
        <li className={s.dialogIist}>
          <DialogItem id="3" name="Мувито" />
        </li>
        <li className={s.dialogIist}>
          <DialogItem id="4" name="Казяичон" />
        </li>
        <li className={s.dialogIist}>
          <DialogItem id="5" name="Бальдион" />
        </li>
        <li className={s.dialogIist}>
          <DialogItem id="6" name="Мурзион" />
        </li>
      </ul>
    </div>
  );
};
export default Dialog;
