// import { rerenderEntireTree } from "../render";

import messageReducer from "./message-reducer"; 
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            newPostText: 'Tap smth',
            messagesDataProfile: [
                { id: 1, message: "it is 2 post", likesCount: 0 },
                { id: 2, message: "it is just a 1st post", likesCount: 3 }
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('smth');
    },
    // addPost() { 
    //     debugger;
    //     let newPost = {
    //         id: 3,
    //         message: this._state.messagesPage.newPostText,
    //         likesCount: 3
    //     };
    //     this._state.messagesPage.messagesDataProfile.push(newPost);
    //     this._state.messagesPage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {

    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.messagesPage = profileReducer(this._state.messagesPage, action);
        this._state.profilePage = messageReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.Storage = store;