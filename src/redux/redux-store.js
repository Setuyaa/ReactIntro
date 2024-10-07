import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    messagesPage: profileReducer,
    profilePage: messageReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers );

export default store;