import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    )
}

/**
|--------------------------------------------------
| aca serian las rutas donde empieza todo
| si estamos en login , renderiza el componente Login
| si mandamos cualquier otra cosa despues de / mandamos a las rutas de los Heroes
|
|--------------------------------------------------
*/