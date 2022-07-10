import React from 'react';
import s from "./FindFriends.module.css";
import UserContainer from "./User/UserContainer";
import userImage from "../../../assets/images/user.png";
import Pagination from "../../common/Pagination/Pagination";


let FindFriends = ({users, totalUsersCount, currentPage, onPageChanged, pageSize, ...props}) => {
    let UserElements = (users).map(u => {
            return (<UserContainer
                id={u.id}
                imgUrl={u.photos.small !== null ? u.photos.small : userImage}
                age={u.age}
                name={u.name}
                education={u.education}
                city={u.city}
                key={u.id}
                isFriend={u.followed}/>)
        }
    )

    return (
        <div>
            <div className={s.header}>
                <h1 className={s.headerHeader}>Users</h1>
            </div>
            <Pagination onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}/>
            <div className={s.users}>
                {UserElements}
            </div>
        </div>
    )
}

export default FindFriends;