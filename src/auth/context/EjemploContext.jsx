// # por cada funcionalidad global creamos un Context
import { createContext, useState } from 'react';

export const EjemploContext = createContext();

/*  inicializacion */
const initialTheme = 'light';
/*  inicializacion */

// envuelve a todos los componentes en los cual se quieran compartir
// con el provider

export const EjemploProvider = ({ children }) => {
    /*   estados o funciones para compartir    */
    const [theme, setTheme] = useState(initialTheme); // estado
    const handleTheme = (e) => { // funcion
        setTheme(e.target.value);
    };

    /* en data ponemos los estados o funciones a compartir */
    const data = { theme, handleTheme };
    /*                                                */

    return (
        <EjemploContext.Provider value={data}>
            {children}
        </EjemploContext.Provider>
    );
};

