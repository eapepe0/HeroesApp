import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};

/**
 * nombre es igual al nombre ingresado en mininuscula y sin espacios al final
 *
 * si lo ingresado es nada , devulvemos algo vacio
 *
 * de lo contrario filtramos cada heroe, que incluya su nombre en el nombre del superheroe
 */
