import React from 'react';
import {connect} from "react-redux";
import {
    requestUsers,
    setCurrentPage,
} from "../../../redux/friends-reducer";
import FindFriends from "./FindFriends";
import Preloader from '../../common/Preloader/Preloader'
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/users-selectors";

class FindFriendsContainer extends React.Component {
    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props

        getUsers(currentPage, pageSize)
    }

    onPageChanged = (page) => {
        const {setCurrentPage, getUsers, pageSize} = this.props

        setCurrentPage(page);
        getUsers(page, pageSize)
    }

    render() {
        const {isFetching, users, totalUsersCount, pageSize, currentPage} = this.props

        return (
            <>
                {isFetching ? <Preloader/> : null}
                <FindFriends onPageChanged={this.onPageChanged}
                             users={users}
                             totalUsersCount={totalUsersCount}
                             pageSize={pageSize}
                             currentPage={currentPage}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}

export default connect(mapStateToProps, {setCurrentPage, getUsers: requestUsers})(FindFriendsContainer)