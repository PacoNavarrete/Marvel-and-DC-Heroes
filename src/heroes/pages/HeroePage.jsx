import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helper/getHeroeById';

export const HeroePage = () => {
  const { id } = useParams();
  const heroe = useMemo(() => getHeroeById(id), [id]);
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to="/" />;
  }

  return (
    <div className="card mb-5 mt-5 bg-dark animate__animated animate__fadeInDown">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={heroe.url}
            className="img-fluid rounded-start"
            alt={heroe.id}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <br />
            <h2 className="card-title">{heroe.superhero}</h2>
            <br />
            <p>
              <b>Alter Ego:</b> <br />
              {heroe.alter_ego}
            </p>
            <p>
              <b>Publisher:</b> <br />
              {heroe.publisher}
            </p>
            <p>
              <b>First Appearance:</b> <br />
              {heroe.first_appearance}
            </p>
            <br />
            <h5>Characters:</h5>
            <p>{heroe.characters}</p>
          </div>
          <button className="btn btn-secondary" onClick={onGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
