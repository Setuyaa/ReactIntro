const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogData: [
        { id: 1, name: 'Nastya' },
        { id: 2, name: 'Poly' },
        { id: 3, name: 'Tanya' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Elena' }],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "N;wdw;kd " }
    ],
    newMessageBody: ""
}
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            state.messagesData.push({ id: 6, message: body });
            state.newMessageBody = "";
            break;
        default:
            break;
    }
    return state;
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})
export default messageReducer;