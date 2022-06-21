import React from "react";

export const Post = ({
    userName = "",
    userEmail = "",
    userAvatar = "",
    postTitle = "",
    postBody = "",
    deletePost = () => {},
}) => {
    return (
        <div className='post'>
            <div className='user-info'>
                <button onClick={deletePost} style={styles.buttonDelete}>
                    X
                </button>
                <img src={userAvatar} alt={userName} style={styles.avatar} />
                <div className='user-name'>
                    <h4 style={styles.h4}>{userName}</h4>
                    <p style={styles.p}>{userEmail}</p>
                </div>
            </div>
            <div className='post-body'>
                <h3>{postTitle}</h3>
                <p>{postBody}</p>
            </div>
        </div>
    );
};

const styles = {
    avatar: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        marginRight: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    h4: {
        margin: "0",
    },
    p: {
        margin: "0",
    },
    buttonDelete: {
        backgroundColor: "transparent",
        border: "none",
        color: "red",
        fontSize: "1.5rem",
        cursor: "pointer",
    },
};
