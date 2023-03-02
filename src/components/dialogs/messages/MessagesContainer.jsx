import React from "react";
import { updateNewMessageBodyCreater, sendMessageCreator } from "../../../redux/dialogsReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
  debugger
  // let messagesElements = props.state.messages.map(m => <MessageCom time={m.time} name={m.name} text={m.message} />)
  // let newMessageBody = props.state.newMessageBody;
  let state = props.store.getState().dialogsPage;
  // let onSendMessageClick = () => {
  //   props.dispatch(sendMessageCreator());
  // }

  // let onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.dispatch(updateNewMessageBodyCreater(body));
  // }
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());

  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreater(body));
  }
  return (
    <Messages updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
  );
};
export default MessagesContainer;