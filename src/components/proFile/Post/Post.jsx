import React from "react";
import s from "./Post.module.css";
import usersPic from "../../../images/dialog/user1.png";
const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.postWrapper}>
        <img class={s.postAvatar} src={usersPic} />
        <div class={s.postWrap}>
          <h3 className={s.postTitle} href="">
            Иван
          </h3>
          <span className={s.postTime}>2:30</span>
        </div>
      </div>
      <p class={s.postText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};
export default Post;
