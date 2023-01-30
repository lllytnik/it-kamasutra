import React from "react";
import s from "./Post.module.css";
import usersPic from "../../../images/dialog/user1.png";
const Post = (props) => {
  let posts = [
    { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '2:30', img: { usersPic } },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '3:40', img: { usersPic } }
  ]
  let postsElements = posts.map(p =>
    <div className={s.post} >
      <div className={s.postWrapper}>
        <img class={s.postAvatar} src={p.img} />
        <div class={s.postWrap}>
          <h3 className={s.postTitle}>
            {p.name}
          </h3>
          <span className={s.postTime}>{p.time}</span>
        </div>
      </div>
      <p class={s.postText}>
        {p.message}
      </p>
    </div>
  )
  return (
    <>
      {postsElements}
    </>
  );
};
export default Post;
