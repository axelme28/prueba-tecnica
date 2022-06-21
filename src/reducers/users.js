import { types } from "../types/types";

const initialState = {
    users: [
        {
            id: 1,
            email: "",
            first_name: "",
            last_name: "",
            avatar: "",
        },
    ],
};

export const usersReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case types.getUsers:
            return {
                ...state,
                users: action.payload.users,
            };
        case types.setUserById:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            ...action.payload.user,
                        };
                    }
                    return user;
                }),
            };
        default:
            return state;
    }
};
