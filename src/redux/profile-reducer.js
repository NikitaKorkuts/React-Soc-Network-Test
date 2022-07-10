const ADD_POST = 'ADD_POST';
const SET_POST_TEXT = 'SET_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
    posts: [
        {id: 0, likesCount: 12, message: 'Hi, how are you?'},
        {id: 1, likesCount: 33, message: 'Workout every morning to be strong and make my day better'},
        {id: 2, likesCount: 120221, message: 'Strong person never cry'}
    ],
    postText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let id = state.posts.length;
            return {
                ...state,
                postText: '',
                posts: [...state.posts, {id: id, likesCount: 0, message: state.postText}]
            }

        case SET_POST_TEXT:
            return{
                ...state,
                postText: action.value
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setPostTextActionCreator = (value) => ({type: SET_POST_TEXT, value});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;