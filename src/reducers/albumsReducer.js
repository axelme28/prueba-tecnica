import { types } from "../types/types";

const initialState = {
    albums: [],
};

export const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getAlbums:
            return {
                ...state,
                albums: action.payload,
            };
        default:
            return state;
    }
};
