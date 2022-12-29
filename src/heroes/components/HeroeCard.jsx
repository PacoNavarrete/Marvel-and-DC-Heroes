import { Link } from 'react-router-dom';
export const HeroeCard = ({ id, superhero, alter_ego, url, characters }) => {
  return (
    <Link to={`/heroe/${id}`} className="link-to-hero-container">
      <div className="col animate__animated animate__fadeIn">
        <div className="card h-100 text-bg-dark">
          <img src={url} className="card-img-top" alt={id} />
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
          </div>
          <div className="card-body">
            <p>{alter_ego}</p>
            {alter_ego !== characters && <p>{characters}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};
