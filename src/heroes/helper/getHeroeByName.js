import { heroesInfo } from '../data/heroesInfo';

export const getHeroeByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return heroesInfo.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name)
  );
};
