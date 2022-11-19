import React from 'react'
import { HeroList } from '../index'

export const MarvelPage = () => {
  return (<>
    <h1 className="animate__animated animate__slideInLeft mt-5 d-flex justify-content-center" >MarvelPage</h1>
    <hr />

    <HeroList publisher="Marvel Comics" />
  </>)
}
/**
 * esta pagina muestra el la lista de heroes con la editora indicada
 */