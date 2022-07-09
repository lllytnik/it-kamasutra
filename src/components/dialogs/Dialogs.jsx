import React from "react";
import Dialog from "./dialog/Dialog";
import Messages from "./messages/Messages";
import s from "./Dialogs.module.css";
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <Dialog />
      <Messages />
    </div>
  );
};
export default Dialogs;
