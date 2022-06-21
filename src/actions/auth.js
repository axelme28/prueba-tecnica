import Swal from "sweetalert2";
import { API, API_LOGIN, USER_HOME } from "../constants/paths";
import { types } from "../types/types";

export const startLoginAction = (email, password, history) => (dispatch) => {
    try {
        // const history = useHistory();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", API + API_LOGIN, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.token) {
                    dispatch(loginAction(response.token, email));
                    history.push(USER_HOME);
                    Swal.fire({
                        title: "Bienvenido",
                        text: "Has iniciado sesión correctamente",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            }
        };
        xhr.send(
            JSON.stringify({
                // email: "eve.holt@reqres.in",
                // password: "cityslicka",
                email: email,
                password: password,
            })
        );
    } catch (error) {
        console.log(error);
    }
};

export const loginAction = (token, email) => ({
    type: types.login,
    payload: {
        token,
        email,
    },
});

export const logoutAction = () => ({
    type: types.logOut,
});
