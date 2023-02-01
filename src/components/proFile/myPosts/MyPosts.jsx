import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";
import usersPic from "../../../images/dialog/user1.png";

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '2:30', img: usersPic },
    { id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', name: 'Иван', time: '3:40', img: usersPic }
  ]
  let postsElements = posts.map(p => <Post message={p.message} name={p.name} time={p.time} img={p.img} />)
  return (
    <>
      <div className={s.myPost}>
        <form class={s.myPostForm} action="post">
          <div class={s.formWrap}>
            <label for="story">Tell us your story:</label>
            <textarea
              class={s.formTextAria}
              id="MyPost"
              name="MyPost"
              placeholder="So..."
              rows="5"
            ></textarea>
          </div>
          <input id="MyPost" type="button" value="Отправить" class={s.formBtn} />
        </form>
      </div>
      {postsElements}
    </>
  );
};
export default MyPosts;
