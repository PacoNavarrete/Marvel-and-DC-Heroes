import { Navigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helper/getHeroeById';

export const HeroePage = () => {
  const { id } = useParams();

  const heroe = getHeroeById(id);

  if (!heroe) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>{heroe.superhero}</h1>
    </>
  );
};
