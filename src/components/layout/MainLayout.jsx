import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutAction } from "../../actions/auth.js";
import { LOGIN, USER_ALBUMS, USER_HOME, USER_POSTS } from "../../constants/paths.js";
import { ButtonLogout } from "../ui/ButtonLogout.jsx";

export const MainLayout = ({ children }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logoutAction());
        history.push(LOGIN);
    };

    return (
        <div>
            <div className='navBar' id='mainNavBar'>
                <Link href='#home'>Prueba Tecnica</Link>
                <div className='' style={{ display: "flex", justifyContent: "end" }}>
                    <Link to={USER_HOME}>Usuarios</Link>
                    <Link to={USER_POSTS}>Posts</Link>
                    <Link to={USER_ALBUMS}>Albums</Link>
                    <ButtonLogout onClick={handleLogout}>LogOut</ButtonLogout>
                </div>
            </div>
            {children}
        </div>
    );
};
