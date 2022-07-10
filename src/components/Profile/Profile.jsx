import React from 'react'
import s from './Profile.module.css'
import UserProfile from "./UserProfile/UserProfile";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({status, updateStatus, profile, ...props}) => {
    return (
        <div>
            <UserProfile status={status} updateStatus={updateStatus} profile={profile}/>
            <PostsContainer />
        </div>
    )
}

export default Profile