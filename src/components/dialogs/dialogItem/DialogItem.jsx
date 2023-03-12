import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
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

export default DialogItem;