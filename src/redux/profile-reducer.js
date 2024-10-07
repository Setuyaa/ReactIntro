const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: 'Tap smth',
    messagesDataProfile: [
        { id: 1, message: "it is 2 post", likesCount: 0 },
        { id: 2, message: "it is just a 1st post", likesCount: 3 }
    ]
}
const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 3
            };
            state.messagesDataProfile.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default: break;
    }
    return state;
}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT,
    newText: text

})
export default profileReducer;