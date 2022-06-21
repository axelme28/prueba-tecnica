import { type } from "@testing-library/user-event/dist/type";
import { API2, API_GET_POSTS, API_GET_USERS } from "../constants/paths";
import { types } from "../types/types";
const axios = require("axios");

export const startGetUsersAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API2 + API_GET_USERS);
            dispatch(getUsersAction(response.data));
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
};

const getUsersAction = (users) => ({
    type: types.getUsersPosts,
    payload: {
        users,
    },
});

export const startGetPostsAction = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API2 + API_GET_POSTS);
            dispatch(getPostsAction(response.data));
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
};

const getPostsAction = (posts) => ({
    type: types.getPosts,
    payload: {
        posts,
    },
});

export const deletePostAction = (postId, userId) => ({
    type: types.deletePost,
    payload: {
        postId,
        userId,
    },
});
