import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer"


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} name={p.name} time={p.time} img={p.img} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }
  return (
    <>
      <div className={s.myPost}>
        <form className={s.myPostForm} action="post">
          <div className={s.formWrap}>
            <label for="story">Tell us your story:</label>
            <textarea
              ref={newPostElement}
              value={props.newPostText}
              onChange={onPostChange}
              className={s.formTextAria}
              id="MyPost"
              name="MyPost"
              placeholder="So..."
              rows="5"
            />
          </div>
          <input id="MyPost" type="button" onClick={addPost} value="Отправить" className={s.formBtn} />
        </form>
      </div>
      {postsElements}
    </>
  );
};
export default MyPosts;
