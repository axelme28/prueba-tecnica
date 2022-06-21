import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, startGetPostsAction, startGetUsersAction } from "../actions/post";
import { Post } from "../components/ui/Post";

export const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts.userWithPosts);

    useEffect(() => {
        dispatch(startGetUsersAction());
        dispatch(startGetPostsAction());
    }, []);

    const handleDeletePost = (postId, userId) => {
        dispatch(deletePostAction(postId, userId));
    };

    return (
        <div className='posts'>
            <div>
                {posts.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2 style={styles.h2}>{user.name}</h2>
                            <div>
                                {user.posts.map((post) => {
                                    return (
                                        <Post
                                            key={post.id}
                                            userName={user.name}
                                            userEmail={user.email}
                                            userAvatar='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                                            postTitle={post.title}
                                            postBody={post.body}
                                            deletePost={() => handleDeletePost(post.id, user.id)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const styles = {
    h2: {
        color: "#ff8435",
        fontSize: "1.5rem",
    },
};
