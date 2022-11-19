import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`{publisher} no es valido`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};

/**
 * si validPublisher NO incluye lo que nosotros buscamos , devolvemos no es valido
 *
 * de lo contrario , filtramos cada heroe donde su publisher sea igual al publisher buscado
 */
