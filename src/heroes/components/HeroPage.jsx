import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
    const navigate = useNavigate();
    const goBack = () => { // al hacer click en volver 
        navigate(-1);
    }
    const { id } = useParams(); // sacamos el id de la url , seria el nombre del heroe
    const hero = useMemo(() => getHeroById(id), [id]); // usamos la busqueda del hero por el id, cada vez que cambia el id lo volvemos a memorizar


    if (!hero) { // si el heroe  no existe , por que escribiste algo en la url que no esta te redirige al root por ej (/hero/asdf)
        return <Navigate to="/" />
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img-thumbnail  animate__animated animate__fadeInLeft' />
            </div>
            <div className="col-8">
                <h3 className="">{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
                    <li className="list-group-item"><b>1st appereance:</b>{hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary mt-5" onClick={goBack}>Volver</button> {/* al apretar regresar hacemos un navigate -1 (volver) */}
            </div>
        </div>
    )
}
