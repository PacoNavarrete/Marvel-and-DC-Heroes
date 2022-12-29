import {heroesInfo} from '../data/heroesInfo';

export const getHeroeById = (id) => {
  return heroesInfo.find((heroe) => heroe.id === id)
}