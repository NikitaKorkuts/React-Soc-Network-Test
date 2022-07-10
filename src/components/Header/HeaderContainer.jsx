import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        authUserProfile: state.auth.authUserProfile
    }
}

export default connect(mapStateToProps, {})(HeaderContainer);