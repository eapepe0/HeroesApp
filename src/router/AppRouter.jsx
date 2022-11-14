import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth'
import { DcPage, MarvelPage } from '../heroes'
import { Navbar } from '../ui/'

Navbar
export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to='/dc' />} />
                <Route path="*" element={<Navigate to='/login' />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </>
    )
}
