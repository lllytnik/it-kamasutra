import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} name={p.name} time={p.time} img={p.img} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (
    <>
      <div className={s.myPost}>
        <form class={s.myPostForm} action="post">
          <div class={s.formWrap}>
            <label for="story">Tell us your story:</label>
            <textarea
              ref={newPostElement}
              class={s.formTextAria}
              id="MyPost"
              name="MyPost"
              placeholder="So..."
              rows="5"
            ></textarea>
          </div>
          <input id="MyPost" type="button" onClick={addPost} value="Отправить" class={s.formBtn} />
        </form>
      </div>
      {postsElements}
    </>
  );
};
export default MyPosts;
