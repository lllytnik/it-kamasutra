import React from "react";
import s from "./Messages.module.css";
import userPic from "../../../images/dialog/user1.png";

const MessageCom = (props) => {
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

const Messages = () => {
  let messages = [
    { id: 1, name: 'Димон', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', time: '2:43' },
    { id: 2, name: 'Димон', message: 'Sit amet consectetur adipisicing elit.', time: '4:43' },
    { id: 3, name: 'Димон', message: 'Lorem ipsum dolor.', time: '7:43' },
    { id: 4, name: 'Димон', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', time: '8:43' }
  ]
  let messagesElements = messages.map(m => <MessageCom time={m.time} name={m.name} text={m.message} />)
  return (
    <div className={s.messages}>
      <ul className={s.messagesList}>
        {messagesElements}
      </ul>
    </div>
  );
};
export default Messages;
