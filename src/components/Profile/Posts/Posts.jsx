import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import SendPost from "./SendPost/SendPost";

const Posts = (props) => {
    let postsElements = (props.posts).map( p => <Post likesCount={p.likesCount} key={p.id} message={p.message}/> )
    console.log('Posts Render')
    return (
        <div>

            <SendPost resetPost={props.resetPost} addPost={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;