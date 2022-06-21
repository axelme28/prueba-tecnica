import { Avatar } from "./avatar";
import { ButtonView } from "./ButtonView";

export const UserCardAlbum = ({ avatar = "", name = "", last_name = "", email = " ", action }) => {
    console.log(action);
    return (
        <div className='grid-item'>
            <Avatar src={avatar} />
            <h3 style={styles.title}>
                {name} {last_name}
            </h3>

            <p style={styles.email}> {email} </p>

            <ButtonView onClick={action}>ver Albums</ButtonView>
        </div>
    );
};

const styles = {
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        textAlign: "center",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "10px",
        textAlign: "center",
    },
    email: {
        fontSize: "1.2rem",
        FontFace: "Arial",
        marginBottom: "10px",
        textAlign: "center",
    },
    imgEdit: {
        width: "20px",
        height: "20px",
        marginLeft: "10px",
    },
};
