import { Avatar } from "./avatar";
import { EditButton } from "./EditButton";

export const UserCard = ({
    avatar = "",
    first_name = "",
    last_name = "",
    email,
    action = () => {},
}) => {
    return (
        <div className='grid-item'>
            <EditButton onClick={action}>
                <img
                    style={{ width: "20px", height: "20px" }}
                    src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-compose-512.png'
                    alt='edit'
                />
            </EditButton>
            <Avatar src={avatar} />
            <h3 style={styles.title}>
                {first_name} {last_name}
            </h3>

            <p style={styles.email}> {email} </p>
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
