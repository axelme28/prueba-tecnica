import { types } from "../types/types";

const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.email,
                isAuthenticated: true,
            };
        case types.logOut:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
