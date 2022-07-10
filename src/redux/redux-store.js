import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messangerReducer from "./messanger-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    messanger: messangerReducer,
    friends: friendsReducer
});

let store = createStore(reducers);

export default store;
window.store = store;