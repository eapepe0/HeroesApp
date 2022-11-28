import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false,
}

const init = () => { // inicializamos el estado del reducer (authState)
    const user = JSON.parse(localStorage.getItem('user')); // sacamos el usuario del localStorage
    return {
        logged: !!user, // al hacer doble negacion devolvemos el valor booleano del user , si es una string "asdf" 
        user: user,  // y le hacemos una negacion devuelve false con otra negacion devuelve true
    }
}
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => { // si enviamos el login
        const user = { id: 'ABC', name } // creamos un usuario
        const action = { // creamos la accion
            type: types.login, // si el tipo es login
            payload: user // lo enviado es el usuario
        }
        localStorage.setItem('user', JSON.stringify(user)) // enviamos el usuario al localStorage
        dispatch(action); // enviamos la accion
    }
    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: types.logout,
        }
        dispatch(action)
    }
    return (
        <AuthContext.Provider value={{ // compartimos el estado del reducer , authState con el spread , y el login que es la accion
            ...authState,
            login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
