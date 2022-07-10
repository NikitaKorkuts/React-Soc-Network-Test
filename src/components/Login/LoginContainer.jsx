import React from 'react'
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)