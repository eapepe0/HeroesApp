import { heroes } from "../index";

export const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
/**
 * buscamos el heroe por el id , si el heroe.id es igual al id devuelve el valor
 */
