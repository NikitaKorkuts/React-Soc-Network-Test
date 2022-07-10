import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {reset} from "redux-form";

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value));
        },
        resetPost: (dispatch) => {
            dispatch(reset('sendPost'));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;