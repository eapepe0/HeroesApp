import React from "react";
import { HeroList } from "../index";

export const DcPage = () => {
    return (
        <>
            <h1 className="animate__animated animate__slideInLeft mt-5 d-flex justify-content-center">DcPage</h1>
            <hr />

            <HeroList publisher="DC Comics" />
        </>
    );
};

/**
 * esta pagina muestra el la lista de heroes con la editora indicada
 */