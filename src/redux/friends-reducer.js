import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const ADD_TO_FRIENDS = 'ADD_TO_FRIENDS';
const REMOVE_FROM_FRIENDS = 'REMOVE_FROM_FRIENDS';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FRIENDS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id,  'id', {followed: true})
                    // state.users.map(u => {
                    // if (u.id === action.id) {
                    //     return {...u, followed: true};
                    // } else {
                    //     return u
                    // }
                // })
            }
        case REMOVE_FROM_FRIENDS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.id) {
                //         return {...u, followed: false}
                //     } else {
                //         return u
                //     }
                // })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const addToFriends = (id) => ({type: ADD_TO_FRIENDS, id});
export const removeFromFriends = (id) => ({type: REMOVE_FROM_FRIENDS, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setToggleIsFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(setToggleIsFetching(false))
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setUsers(response.items))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setToggleIsFollowingInProgress(true, userId))
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setToggleIsFollowingInProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.follow.bind(followAPI), addToFriends)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(followAPI), removeFromFriends)
}


export default friendsReducer;