import { API2, USER_ALBUM_DETAIL } from "../constants/paths";
import { types } from "../types/types";
const axios = require("axios");
export const startGetAlbumsAction = (userId = 0, history) => {
    return async (dispatch) => {
        try {
            const endpoint = `users/${userId}/albums`;
            const response = await axios.get(API2 + endpoint);
            dispatch({
                type: types.getAlbums,
                payload: response.data,
            });
            history.push(USER_ALBUM_DETAIL);
            console.log("startGetAlbumsAction");
        } catch (error) {
            console.log(error);
        }
    };
};
