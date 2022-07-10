import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA'
const SET_AUTH_USER_PROFILE = 'samurai-network/auth/SET_AUTH_USER_PROFILE'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authUserProfile: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case SET_AUTH_USER_PROFILE:
            return {
                ...state, authUserProfile: action.profile
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId: userId, email: email, login: login, isAuth: isAuth}
});
export const setAuthUserProfile = (profile) => ({type: SET_AUTH_USER_PROFILE, profile});

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
            profileAPI.getUserProfile(id).then(data => {
                dispatch(setAuthUserProfile(data))
            })
        }
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 1) {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }

}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                dispatch(setAuthUserProfile(null))
            }
        })
}

export default authReducer;