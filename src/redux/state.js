import usersPic from "../images/dialog/user1.png";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '2:30', img: usersPic },
                { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '3:40', img: usersPic }
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Димон' },
                { id: 2, name: 'Оксимирон' },
                { id: 3, name: 'Мувито' },
                { id: 4, name: 'Казяичон' },
                { id: 5, name: 'Бальдион' },
                { id: 6, name: 'Мурзион' },
            ],
            messages: [
                { id: 1, name: 'Димон', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', time: '2:43' },
                { id: 2, name: 'Димон', message: 'Sit amet consectetur adipisicing elit.', time: '4:43' },

            ],
            newMessageBody: ""
        }

    },
    _callSubscriber() {
        console.log('he he');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                name: 'Санек',
                message: this._state.profilePage.newPostText,
                time: '18:00',
                img: usersPic
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 3, name: 'Димон', message: body, time: '7:43' });
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
window.state = store;
export default store;