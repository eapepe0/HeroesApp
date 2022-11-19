import React from "react";
import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {

    if (alter_ego === characters) return (<></>) // si los 2 son iguales no mostramos nada

    return <p>{characters}</p> // de lo contrario mostramos quienes personificaron al heroe
}


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImgUrl = `/assets/heroes/${id}.jpg`; // creamos la ruta de la imagen

    return (
        <>
            <div className="col animate__animated animate__fadeIn"> {/* usamos animate para ponerle un estilo */}
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={heroImgUrl} className="card-img" alt={superhero} />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                                <CharactersByHero alter_ego={alter_ego} characters={characters} />
                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>
                                <Link to={`/hero/${id}`} > Más ...</Link> {/* creamos con link un link dinamico basado en el id */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


/**
 * { <p>{(characters.length == alter_ego.length) ? alter_ego : characters}</p>} } 
 * 
 * Se puede renderizar de esta manera
 * 
 *  o asi :
 * 
 *  {
 *     (alter_ego !== characters) && <p>{characters}</p>
 *  }
 * 
 */