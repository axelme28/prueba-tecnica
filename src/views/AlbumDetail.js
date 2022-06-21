import React from "react";
import { useSelector } from "react-redux";
import { AlbumDetailCard } from "../components/ui/AlbumDetail";

export const AlbumDetail = () => {
    const album = useSelector((state) => state.albums.albums);

    console.log(album);
    return (
        <div className='grid-responsive'>
            {album.map((album) => {
                return <AlbumDetailCard key={album.id} title={album.title} />;
            })}
        </div>
    );
};
