import React from "react";
import Dialog from "./dialog/Dialog";
import Messages from "./messages/Messages";
import s from "./Dialogs.module.css";
import MessagesContainer from "./messages/MessagesContainer";
const Dialogs = (props) => {
  debugger
  return (
    <div className={s.dialogs}>
      <Dialog dialogs={props.state.dialogs} />
      <MessagesContainer store={props.store} state={props.state} dispatch={props.dispatch} />
    </div>
  );
};
export default Dialogs;
