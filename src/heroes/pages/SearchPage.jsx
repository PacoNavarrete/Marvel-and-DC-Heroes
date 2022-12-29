export const SearchPage = () => {
  return (
    <>
      <h4>search super hero</h4>
      <div className="container-fluid">
        <div className="row">
          <form className="col-8">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="hero name..."
                name="hero-name"
              />
              <button className="btn btn-outline-secondary">
                <b>Search</b>
              </button>
            </div>
          </form>
        </div>
        <div className="col-12">
          <div className="alert alert-success">search results here...</div>
          <div className="alert alert-danger">
            <b>There's no heroes with the query!</b>
          </div>
        </div>
      </div>
    </>
  );
};
