import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {Navigate} from 'react-router'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.id || this.props.authUserId;
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    render() {
        if (!this.props.isAuth && !this.props.router.params.id) {
            return <Navigate to={'/login'} />
        }
        return (
            <div>
                <Profile {...this.props} updateStatus={this.props.updateUserStatus} status={this.props.status} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
const actionCreators = {getUserProfile, getUserStatus, updateUserStatus}

export default compose(withRouter, connect(mapStateToProps, actionCreators))(ProfileContainer)