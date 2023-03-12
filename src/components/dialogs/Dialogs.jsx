import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './dialogItem/DialogItem'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => {
        return <DialogItem id={d.id} name={d.name} />
    });
    let messagesElements = state.messages.map((m) => {
        return <Message time={m.time} name={m.name} text={m.message} />
    })

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog} >{dialogsElements}</div>
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
        </div>

    )
}

export default Dialogs;