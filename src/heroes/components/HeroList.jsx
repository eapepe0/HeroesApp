import { useMemo } from "react";
import { getHeroesByPublisher } from "../index";
import { HeroCard } from "../index";


export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {heroes.map((item) => {
                return (
                    <div key={item.id}>
                        <HeroCard key={item.id} {...item} />
                    </div>
                );
            })}
        </div>
    );
};

/* 
/ llamamos a la funcion con un el nombre de una editora
/
/ buscamos todos los heroes con esa editora : linea 7
/
/ mapeamos entre todos lo heroes de esa editora
/
/ y creamos cada tarjeta de heroe con esos datos
/
*/