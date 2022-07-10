import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import {addPostActionCreator, setPostTextActionCreator} from "../../../redux/profile-reducer";



const Posts = (props) => {

    let postsElements = (props.state.posts).map( p => <Post likesCount={p.likesCount} message={p.message}/> )

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let message = e.target.value;
        props.dispatch(setPostTextActionCreator(message));
    }

    return (
        <div>
            <div className={s.sendPost}>
                <h1>My posts</h1>
                <textarea onChange={onPostChange}  name="post" id="post" value={props.state.postText} />
                <input onClick={addPost} type="submit" value="Send" />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;