import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../index";
import { Navbar } from "../../ui";
import React from "react";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="dc" />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    );
};

/**
 * aca mostramos la navbar , dentro de nuestra rama de heroes
 *  con la navbar manejamos las peticiones a la url si escribimos localhost/dc nos envia a dc gracias al react-router-dom
 * despues nuestro root o raiz seria la pagina de DC
 * dc mostraria DC
 * marvel mostraria marvel
 * search el componente search
 * con hero:id al mandarle un id (dc-batman) con un heroe , manda el componente HeroPage
 */