import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startGetAlbumsAction } from "../actions/albums";
import { startGetUsers } from "../actions/users";
import { UserCardAlbum } from "../components/ui/UserCardAlbum";

export const Albums = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector((state) => state.posts.users.users);
    // console.log(users);
    useEffect(() => {}, []);

    const handleClick = (userId) => {
        dispatch(startGetAlbumsAction(userId, history));
    };

    return (
        <div className='main-div grid-responsive'>
            {users.map((user) => {
                return (
                    <UserCardAlbum
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                        action={() => handleClick(user.id)}
                    />
                );
            })}
        </div>
    );
};
