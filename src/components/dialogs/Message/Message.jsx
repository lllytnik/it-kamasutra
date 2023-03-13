import React from 'react'
import s from './../Message/Message.module.css'
import userPic from "../../../images/dialog/user1.png";



const Message = (props) => {

    return (
        <li className={s.сompanion}>
            <div className={s.сompanionInner}>
                <img className={s.companionAvatar} src={userPic} alt="logo" />
                <div className={s.companionWrap}>
                    <a className={s.сompanionLink} href="#">
                        {props.name}
                    </a>
                    <span className={s.messagesTime}>{props.time}</span>
                </div>
            </div>
            <p className={s.сompanionText}>{props.text}</p>
        </li>
    );
}

export default Message;