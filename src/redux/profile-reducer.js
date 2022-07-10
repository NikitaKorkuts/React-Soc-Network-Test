import {authAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    profile: null,
    status: '',
    posts: [
        {id: 0, likesCount: 12, message: 'Hi, how are you?'},
        {id: 1, likesCount: 33, message: 'Workout every morning to be strong and make my day better'},
        {id: 2, likesCount: 120221, message: 'Strong person never cry'}
    ]
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let id = state.posts.length;
            return {
                ...state,
                posts: [...state.posts, {id: id, likesCount: 0, message: action.value}]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (value) => ({type: ADD_POST, value});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response));
    }
}

export const getUserStatus = (userId) => {
    return async dispatch => {
        let response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response));
    }
}

export const updateUserStatus = (status) => {
    return async dispatch => {
        let response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profileReducer;