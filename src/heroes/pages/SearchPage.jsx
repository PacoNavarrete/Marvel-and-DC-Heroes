import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getHeroeByName } from '../helper/getHeroeByName';

import { HeroeCard } from '../components/HeroeCard';

export const SearchPage = () => {

  //[TODO]: Crear un custom hook para manejar la informacion del 
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { q = '' } = query;
  
  const heroes = getHeroeByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return (
    <>
      <h4>search super hero</h4>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <form className="col-12" onSubmit={(event) => onFormSubmit(event)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="hero name..."
                name="searchText"
                value={searchText}
                onChange={onInputChange}
                autoComplete="off"
              />
              <button className="btn btn-outline-secondary">
                <b>Search</b>
              </button>
            </div>
          </form>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {heroes.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
        <div
          className="alert alert-danger mt-5 animate__animated animate__fadeInDown"
          style={{ display: showError ? '' : 'none' }}
        >
          <b>There's no heroes with the query: "{q}"</b>
        </div>

        <div
          className="alert alert-primary mt-5"
          style={{ display: showSearch ? '' : 'none' }}
        >
          <b>Start searching!</b>
        </div>
      </div>
    </>
  );
};
