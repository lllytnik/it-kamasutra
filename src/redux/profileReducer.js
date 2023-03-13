import usersPic from "../images/dialog/user1.png";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '2:30', img: usersPic },
        { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '3:40', img: usersPic }
    ],
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: 'Санек',
                message: state.newPostText,
                time: '18:00',
                img: usersPic
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;
