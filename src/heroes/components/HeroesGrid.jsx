import { HeroeCard } from './HeroeCard';
import { getHeroesByPublisher } from '../helper/getHeroesByPublisher';

export const HeroesGrid = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((hero) => {
        return <HeroeCard 
          key={ hero.id }
          { ...hero }
        />;
      })}
    </div>
  );
};
