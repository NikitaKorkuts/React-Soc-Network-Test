import React from 'react'
import User from "./User";
import {follow, unfollow} from "../../../../redux/friends-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isFollowingInProgress: state.friends.isFollowingInProgress
    }
}

const UserContainer = connect(mapStateToProps, {follow, unfollow})(User)

export default UserContainer;