import React from "react";
import { HeroCard, getHeroesByName } from "../index";
import { useForm } from "../../hooks/useForm";
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const SearchPage = () => {
    const navigate = useNavigate(); // usamos el hook Navigate
    const location = useLocation(); // se guarda en location el query que se llama search (por la pagina "/search")

    const { q = '' } = queryString.parse(location.search) // si no existe que devuelve algo vacio , separamos los valores ingresados
    // query.q = aca se guarda el valor buscado

    const heroes = getHeroesByName(q); // buscamos los heroes con el query como valor

    const showSearch = (q.length === 0); // si no hay ningun query escrito
    const showError = (q.length > 0) && heroes.length === 0; // si escribiste algo en query y no se encontro ningun heroe


    // inicializamos el form y usamos el evento del hook onInputChange
    const { searchText, onInputChange } = useForm({
        searchText: q
    });
    // funcion que se ejecuta cuando se envia el formulario 
    const onSeachSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) return; // si el termino a buscar es menor o igual a 1 no hace nada
        navigate(`?q=${searchText.toLowerCase().trim(" ")}`) // enviamos el query parameter al url (lo ponemos en minuscula y sacamos los espacios)
    }
    return (<>
        <h1>Search</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Busqueda</h4>
                <hr />
                <form onSubmit={onSeachSubmit}>
                    <input type="text" name="searchText" id="" autoComplete="off" placeholder="Busca un heroe" className="form-control mb-3" value={searchText} onChange={onInputChange} />
                    <button className="btn btn-outline-primary">Buscar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Resultados</h4>
                <hr />
                {/*  {
                    (q === '') // si el query esta vacio
                        ?
                        <div className="alert alert-primary">Search a Hero</div> // mostramos busca un heroe
                        : (heroes.length === 0) // de lo contrario si no encuentra un heroe renderizamos el no hay heroe
                        &&
                        <div className="alert alert-danger">No hay un heroe con ese termino : <b>{q}</b></div>

                } */}
                <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>Search a Hero</div> {/* // mostramos busca un heroe */}
                <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }} >No hay un heroe con ese   termino : <b>{q}</b></div> {/* mostramos ningun heroe encontrado */}
                <hr />

                { // mostramos la busqueda
                    heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))
                }
            </div>
        </div>
    </>);
};
