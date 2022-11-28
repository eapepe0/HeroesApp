import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    return (!logged) // si no esta logueado
        ? children // si es correcto
        : <Navigate to='/' /> // si es incorrecto
}

/**
 * sacamos la constante logged que nos dice si estamos logueados
 * si es correcto (no estamos logueados) renderizamos los hijos (en este caso Login)
 * si no es correcto (estamos logueados) nos envia a la pagina de root en este caso DcPage
 */