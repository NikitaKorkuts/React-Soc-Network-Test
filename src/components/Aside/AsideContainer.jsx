import React from 'react'
import Aside from "./Aside";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps, {logout})(Aside)