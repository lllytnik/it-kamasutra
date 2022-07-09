import React from "react";
import MyPost from "./myPost/MyPost";
import Post from "./Post/Post";
import s from "./Profile.module.css";
import ProfileInfo from "./proFileInfo/ProfileInfo";
const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPost />
      <Post />
    </div>
  );
};
export default Profile;
