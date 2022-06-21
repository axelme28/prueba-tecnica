import { API } from "../constants/paths";
import { types } from "../types/types";
const axios = require("axios");

export const startGetUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(API + "api/users");
        dispatch(getUsersAction(response.data.data));
    } catch (error) {
        console.log(error);
    }
};

export const getUsersAction = (users) => ({
    type: types.getUsers,
    payload: {
        users,
    },
});

export const editUserAction = (id, user) => ({
    type: types.setUserById,
    payload: {
        id,
        user,
    },
});
