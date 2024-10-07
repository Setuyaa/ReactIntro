import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPosts messagesData={props.profilePage.messagesDataProfile} 
                     newText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}
export default Profile;