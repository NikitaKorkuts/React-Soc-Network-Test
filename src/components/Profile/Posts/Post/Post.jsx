import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.postAvatar}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar" />
            </div>
            <div className={s.postText}>
                <p>{props.message}</p>
            </div>
            <div className={s.postLikes}>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;