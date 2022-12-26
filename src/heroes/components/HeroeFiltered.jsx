import { getHeroesByPublisher } from '../helper/getHeroesByPublisher';

export const HeroeFiltered = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className ='hero-card-container'>
      {heroes.map(({ id, superhero }) => {
        return <li key={id}>{superhero}</li>;
      })}
    </div>
  );
};
