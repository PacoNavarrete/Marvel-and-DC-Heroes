import { heroesInfo } from '../data/heroesInfo';

export const getHeroesByPublisher = (publisher) => {


  const validPublisher = ['DC Comics', 'Marvel Comics'];

  if(validPublisher.includes(publisher)) {
    return heroesInfo.filter((heroe) => heroe.publisher === publisher)
  }else {
    throw new Error(
      `el publisher ${publisher} no se encuentra dentro de los publisher validos, revisa mayusculas/minusculas o algun caracter ausente.`)
  }
};
