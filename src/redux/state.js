import usersPic from "../images/dialog/user1.png";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";



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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};




window.state = store;
export default store;