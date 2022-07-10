import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, likesCount: 12, message: 'Hi, how are you?'},
        {id: 2, likesCount: 33, message: 'Workout every morning to be strong and make my day better'},
        {id: 3, likesCount: 120221, message: 'Strong person never cry'}
    ]
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    // 2. action
    let newState = profileReducer(state, action );

    // 3. expectation
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be equal', () => {
    //1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    // 2. action
    let newState = profileReducer(state, action );

    // 3. expectation
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
});

test('after deleting length of posts should be decremented', () => {
    //1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2)
});

test('after deleting length of posts should not be decremented if id incorrect', () => {
    //1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});



