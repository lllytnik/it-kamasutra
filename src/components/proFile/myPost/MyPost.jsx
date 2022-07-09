import React from "react";
import Post from "../Post/Post";
import s from "./Mypost.module.css";
const MyPost = () => {
  return (
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
  );
};
export default MyPost;
