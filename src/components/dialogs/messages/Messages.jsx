import React from "react";
import s from "./Messages.module.css";
import userPic from "../../../images/dialog/user1.png";

const MessageCom = (props) => {
  return (
    <div class={s.сompanion}>
      <div className={s.сompanionInner}>
        <img class={s.companionAvatar} src={userPic} alt="logo" />
        <div class={s.companionWrap}>
          <a className={s.сompanionLink} href="">
            {props.name}
          </a>
          <span className={s.messagesTime}>{props.time}</span>
        </div>
      </div>
      <p class={s.сompanionText}>{props.text}</p>
    </div>
  );
};

const Messages = () => {
  return (
    <div className={s.messages}>
      <ul className={s.messagesList}>
        <li className={s.messagesItem}>
          <MessageCom
            time="2:43"
            name="Димон"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </li>
      </ul>
    </div>
  );
};
export default Messages;
