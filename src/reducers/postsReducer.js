import { types } from "../types/types";
import { usersWithPosts } from "../views/algoritm";

const initialState = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "user@user.com",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
            posts: [
                {
                    id: 1,
                    title: "Post 1",
                    body: "This is the body of post 1",
                },
            ],
        },
    ],
    userWithPosts: [],
};

export const postsReducer = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case types.getPosts:
            return {
                // join the users with the corresponding posts
                ...state,
                userWithPosts: state.users.users.map((user) => {
                    return {
                        ...user,
                        posts: action.payload.posts.filter((post) => post.userId === user.id),
                    };
                }),
            };

        case types.getUsersPosts:
            return {
                ...state,
                // save the data from action.payload to users
                users: action.payload,
            };

        case types.deletePost:
            return {
                ...state,
                // delete the post from the by user id and post id from userWithPosts
                userWithPosts: state.userWithPosts.map((user) => {
                    if (user.id === action.payload.userId) {
                        return {
                            ...user,
                            posts: user.posts.filter((post) => post.id !== action.payload.postId),
                        };
                    }
                    return user;
                }),
            };

        default:
            return state;
    }
};
