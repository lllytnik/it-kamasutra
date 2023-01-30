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
  let dialogs = [
    { id: 1, name: 'Димон' },
    { id: 2, name: 'Оксимирон' },
    { id: 3, name: 'Мувито' },
    { id: 4, name: 'Казяичон' },
    { id: 5, name: 'Бальдион' },
    { id: 6, name: 'Мурзион' },
  ]
  let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
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
