import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        users: state.friends.users
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer;