import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";

import { startLoginAction } from "../actions/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { values, handleInputChange, reset, setValues } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (values.email.trim() === "" || values.password.trim() === "") {
            Swal.fire({
                title: "Error",
                text: "Todos los campos son obligatorios",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        }
        const { email, password } = values;
        dispatch(startLoginAction(email, password, history));
    };
    return (
        <div className='body-singIn'>
            <form className='form-signin'>
                <h4 className='form-signin-heading'>Iniciar Sesión</h4>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Usuario'
                    required
                    autoFocus
                    name='email'
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    required
                    name='password'
                    onChange={handleInputChange}
                />
                <button className='btn btn-lg btn-primary btn-block' onClick={handleLogin}>
                    Ingresar
                </button>
                <div className='update'></div>
            </form>
        </div>
    );
};
