import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const history = useNavigate();

    const onLogin = () => { // al loguearnos
        // sacamos del localStorage el lastPath si existe sino el lastPath es '/'
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Coloso')

        history(lastPath, { replace: true }); // enviamos al lastPath
    };
    return (
        <>
            <div className="container mt-5">
                <h1>LoginPage</h1>
                <hr />
                <button className="btn btn-primary" onClick={onLogin}>
                    Login
                </button>
            </div>
        </>
    );
};
