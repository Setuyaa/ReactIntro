import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }
    let messagesData = props.messagesData;
    let postElements = messagesData.map (message => <Post message={message.message} likesCount={message.likesCount} />);
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.postBlock}>
            <div>
               <h2> My post </h2>
                <div>
                    <div>
                    <textarea onChange={onPostChange}ref={newPostElement} value={props.newText}/>
                  </div>
                  <div>
                    <button onClick={addPost}> Add post </button></div>
                </div>
            </div>
            <div className={s.posts}>
               {postElements}
            </div>
        </div>
    );
}
export default MyPosts;