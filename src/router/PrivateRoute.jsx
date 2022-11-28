import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    return (logged)
        ? children // si es correcto
        : <Navigate to='/login' /> // si es incorrecto
}

/**
 * sacamos la constante logged que nos dice si estamos logueados
 * si es correcto renderizamos los hijos (en este caso HerosApp)
 * si no es correcto (no estamos logueados) nos envia a la pagina de login
 */