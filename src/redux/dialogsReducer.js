const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 3, name: 'Димон', message: body, time: '7:43' }]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;