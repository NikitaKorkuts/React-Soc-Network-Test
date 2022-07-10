import profileReducer from "./profile-reducer";
import messangerReducer from "./messanger-reducer";

let Store = {
    _callSubscriber() {
        console.log('no state changes')
    },
    _state: {
        profile: {
            posts: [
                {id: 0, likesCount: 12, message: 'Hi, how are you?'},
                {id: 1, likesCount: 33, message: 'Workout every morning to be strong and make my day better'},
                {id: 2, likesCount: 120221, message: 'Strong person never cry'}
            ],
            postText: ''
        },
        messanger: {
            dialogs: [
                {id: 0, name: 'Nikita Korkuts'},
                {id: 1, name: 'Slava Kesya'},
                {id: 2, name: 'Andrey Samuilov'},
                {id: 3, name: 'Sergei Kuznetsov'},
                {id: 4, name: 'Dima Antonyk'},
                {id: 5, name: 'Kirill Potso'}
            ],
            messages: [
                {id: 0, message: 'Добрый день, я хочу вам предложить уникальное предложение!'},
                {id: 1, message: 'Купите у нас дрель и получите пылесос в подарок!!'},
                {id: 2, message: 'Акция заканчивается сегодня, не упустите Ваш шанс!!!'},
                {id: 3, message: 'Спасибо, не интересует'}
            ],
            messageText: ''
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messanger = messangerReducer(this._state.messanger, action);
        this._callSubscriber(this._state);
    }
}

export default Store;