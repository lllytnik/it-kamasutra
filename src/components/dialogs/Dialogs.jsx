import React from "react";
import Dialog from "./dialog/Dialog";
import Messages from "./messages/Messages";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <Dialog dialogs={props.state.dialogs} />
      <Messages messages={props.state.messages} dispatch={props.dispatch} />
    </div>
  );
};
export default Dialogs;
