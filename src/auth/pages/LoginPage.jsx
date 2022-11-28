import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const history = useNavigate();

    const onLogin = () => {
        login('Coloso')
        history("/", { replace: true });
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
