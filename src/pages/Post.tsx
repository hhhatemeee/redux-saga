import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IStore } from "../redux/types";

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store: IStore) => store.app.posts);

  // // Самый простой способ загрузить данные при загрузке странице.
  // useEffect(() => {
  //   dispatch({ type: 'LOAD_POST_DATA' });
  // }, []);

  console.log('in component', posts);
  return <div>
    Post
  </div>;
};

export default Post;
