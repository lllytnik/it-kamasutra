import React from "react";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./proFileInfo/ProfileInfo";
const Profile = (props) => {
  debugger
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
