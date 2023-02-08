import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post} >
      <div className={s.postWrapper}>
        <img className={s.postAvatar} src={props.img} />
        <div className={s.postWrap}>
          <h3 className={s.postTitle}>
            {props.name}
          </h3>
          <span className={s.postTime}>{props.time}</span>
        </div>
      </div>
      <p className={s.postText}>
        {props.message}
      </p>
    </div>
  );
};
export default Post;
