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

const Dialog = (props) => {
  debugger;
  let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
  return (

    <div className={s.dialog}>
      <ul className={s.dialogList}>
        <li className={s.dialogItem}>
          {dialogsElements}
        </li>
      </ul>
    </div>
  );
};
export default Dialog;
