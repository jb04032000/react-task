import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loader } from "../../basic/helpers";
import { getPostsList, getUsersList } from "../../redux/actions/usersList";
import Accordion from "react-bootstrap/Accordion";

const HomePage = () => {
  const dispatch = useDispatch();
  const usersListLoader = useSelector(
    (state) => state.rootReducer.usersList?.loading
  );
  const postsListLoader = useSelector(
    (state) => state.rootReducer.postsList?.loading
  );
  const usersList = useSelector(
    (state) => state.rootReducer.usersList?.users?.data
  );
  const postsList = useSelector(
    (state) => state.rootReducer?.postsList?.posts?.data
  );

  const accordion = (id, title, body) => {
    return (
      <Accordion>
        <Accordion.Item eventKey={id}>
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const getUsersPost = (user_id) => {
    return (
      postsList?.length > 0 &&
      postsList.map(
        (data) =>
          data?.user_id == user_id && (
            <div key={data?.id}>
              {accordion(data?.id, data?.title, data?.body)}
            </div>
          )
      )
    );
  };
  const getPostData = (user_id) => {
    let postUsersArray = [];
    postsList?.length > 0 &&
      postsList.forEach((ele) => {
        postUsersArray.push(ele?.user_id);
      });
    if (postUsersArray?.length > 0) {
      return postUsersArray.includes(user_id) ? (
        getUsersPost(user_id)
      ) : (
        <div>No Data Found</div>
      );
    }
  };
  const showUsersList = () => {
    return (
      usersList?.length > 0 &&
      usersList.map((data) => (
        <div key={data?.id} className="mx-5 my-2">
          {accordion(data?.id, data?.name, data?.id && getPostData(data?.id))}
        </div>
      ))
    );
  };

  useEffect(() => {
    dispatch(getUsersList());
    dispatch(getPostsList());
  }, []);

  return (
    <div>
      <p>Users list</p>
      {usersListLoader ? loader() : showUsersList()}
    </div>
  );
};

export default HomePage;
