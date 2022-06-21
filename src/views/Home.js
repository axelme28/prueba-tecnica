import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editUserAction, startGetUsers } from "../actions/users";

import { UserCard } from "../components/ui/UserCard";

export const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(startGetUsers());
    }, []);

    const handleEdit = async (id = 0, user) => {
        const { value: formValues } = await Swal.fire({
            title: "Editar usuario",
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="First name" value = "' +
                user.first_name +
                '">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Last name" value = "' +
                user.last_name +
                '">' +
                '<input id="swal-input3" class="swal2-input" placeholder="Email" value = "' +
                user.email +
                '">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value,
                ];
            },
        });
        if (formValues) {
            const values = convertArrayToObject(formValues);
            const { 0: first_name, 1: last_name, 2: email } = values;
            if (first_name && last_name && email) {
                const data = {
                    first_name: values[0],
                    last_name: values[1],
                    email: values[2],
                };

                dispatch(editUserAction(id, data));
            } else {
                Swal.fire("Error", "todos los campos son obligatorios", "error");
            }
        }
    };

    const convertArrayToObject = (array) => {
        return array.reduce((obj, item, index) => {
            obj[`${index}`] = item;
            return obj;
        }, {});
    };

    return (
        <div className='main-div grid-responsive'>
            {users.map((user) => (
                <UserCard key={user.id} {...user} action={() => handleEdit(user.id, user)} />
            ))}
        </div>
    );
};
