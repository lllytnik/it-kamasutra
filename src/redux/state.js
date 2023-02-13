import usersPic from "../images/dialog/user1.png";

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
                { id: 3, name: 'Димон', message: 'Lorem ipsum dolor.', time: '7:43' },
                { id: 4, name: 'Димон', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', time: '8:43' }
            ]
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
        if (action.type === 'ADD-POST') {
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
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.state = store;
export default store;