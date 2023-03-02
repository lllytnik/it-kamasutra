import React from "react";
import s from "./Messages.module.css";
import userPic from "../../../images/dialog/user1.png";

export const MessageCom = (props) => {
  return (
    <li className={s.сompanion}>
      <div className={s.сompanionInner}>
        <img className={s.companionAvatar} src={userPic} alt="logo" />
        <div className={s.companionWrap}>
          <a className={s.сompanionLink} href="">
            {props.name}
          </a>
          <span className={s.messagesTime}>{props.time}</span>
        </div>
      </div>
      <p class={s.сompanionText}>{props.text}</p>
    </li>
  );
};
const Messages = (props) => {
  debugger
  let state = props.dialogsPage;
  let messagesElements = state.messages.map(m => <MessageCom time={m.time} name={m.name} text={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  return (
    <div className={s.messages}>
      <ul className={s.messagesList}>
        {messagesElements}
      </ul>
      <form className={s.myMessage} action="post">
        <div className={s.formWrap}>
          <label for="story">Tell us your story:</label>
          <textarea id="myMessageText" value={newMessageBody} onChange={onNewMessageChange} name="myMessageText" placeholder="So..." rows="5" />
        </div>
        <input id="myMessage" type="button" onClick={onSendMessageClick} value="Отправить" className={s.formBtn} />

      </form>
    </div>
  );
};

export default Messages;