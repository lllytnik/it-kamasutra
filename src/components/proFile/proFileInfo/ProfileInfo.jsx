import React from "react";
import s from "./ProfileInfo.module.css";
import usersPic from "../../../images/dialog/user1.png";
const ProfileInfo = () => {
  return (
    <div className={s.proFile}>
      <div className={s.proFileWrapper}>
        <img className={s.proFileAvatar} src={usersPic} />
        <div className={s.proFileWrap}>
          <h3 className={s.сompanionTitle} href="">
            Иван
          </h3>
          <a className={s.proFileEmail}>help@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
