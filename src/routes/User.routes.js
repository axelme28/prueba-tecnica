import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { Home } from "../views/Home";
import { MainLayout } from "../components/layout/MainLayout";
import { USER_ALBUMS, USER_ALBUM_DETAIL, USER_HOME, USER_POSTS } from "../constants/paths";
import { Posts } from "../views/Posts";
import { Albums } from "../views/Albums";
import { AlbumDetail } from "../views/AlbumDetail";
export const UserRoutes = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    // console.log(isAuthenticated);

    console.log(isAuthenticated);
    return (
        <div>
            <Switch>
                <MainLayout>
                    {isAuthenticated && (
                        <>
                            <Route path={USER_HOME} component={Home}></Route>
                            <Route path={USER_POSTS} component={Posts}></Route>
                            <Route path={USER_ALBUMS} component={Albums}></Route>
                            <Route path={USER_ALBUM_DETAIL} component={AlbumDetail}></Route>
                        </>
                    )}
                </MainLayout>
            </Switch>
        </div>
    );
};
