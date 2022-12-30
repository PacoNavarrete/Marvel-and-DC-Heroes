import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getHeroeByName } from '../helper/getHeroeByName';

import { HeroeCard } from '../components/HeroeCard';

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({
    searchText: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { q = '' } = query;
  const heroes = getHeroeByName(q);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h4>search super hero</h4>
      <div className="container-fluid">
        <div className="row">
          <form className="col-8" onSubmit={(event) => onFormSubmit(event)}>
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
        <div className="col-12">
          {heroes.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroes} />
          ))}
          <div className="alert alert-danger">
            <b>There's no heroes with the query!</b>
          </div>
        </div>
      </div>
    </>
  );
};
