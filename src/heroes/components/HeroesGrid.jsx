import { HeroeCard } from './HeroeCard';
import { getHeroesByPublisher } from '../helper/getHeroesByPublisher';

export const HeroesGrid = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //continue...
  return (
    <div className="hero-grid-container">
      {heroes.map((hero) => {
        return <HeroeCard />;
      })}
    </div>
  );
};
