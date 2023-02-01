import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./proFileInfo/ProfileInfo";
const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
export default Profile;
