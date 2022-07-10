import React from 'react';
import {addMessageActionCreator} from "../../../redux/messanger-reducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import {reset} from "redux-form";

const mapStateToProps = (state) => {
    return {
        messages: state.messanger.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (value) => {
            dispatch(addMessageActionCreator(value));
        },
        resetMessageForm: (dispatch) => {
            dispatch(reset('sendMessage'));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer