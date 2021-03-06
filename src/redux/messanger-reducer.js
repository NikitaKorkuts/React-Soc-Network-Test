const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 0, name: 'Dmitry Shchchyuk'},
        {id: 1, name: 'Aleksey Nikiforov'},
        {id: 2, name: 'Semen Dementianov'},
        {id: 3, name: 'Anatoliy Slutski'},
        {id: 4, name: 'Vladimir Rudko'},
        {id: 5, name: 'Oleg Vinetski'}
    ],
    messages: [
        {id: 0, message: 'Добрый день, я хочу вам предложить уникальное предложение!'},
        {id: 1, message: 'Купите у нас дрель и получите пылесос в подарок!!'},
        {id: 2, message: 'Акция заканчивается сегодня, не упустите Ваш шанс!!!'},
        {id: 3, message: 'Спасибо, не интересует'}
    ]
};

const messangerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let id = state.messages.length;
            return {
                ...state,
                messages: [...state.messages, {id: id, message: action.value}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (value) => ({type: ADD_MESSAGE, value});


export default messangerReducer;