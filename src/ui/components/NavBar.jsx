import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-menu">
        <NavLink
          className={({ isActive }) =>
            `nav-item ${isActive ? 'is-active' : ''}`
          }
          to="marvel"
        >
          Marvel
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-item ${isActive ? 'is-active' : ''}`
          }
          to="dc"
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-item ${isActive ? 'is-active' : ''}`
          }
          to="heroe"
        >
          Heroe
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-item ${isActive ? 'is-active' : ''}`
          }
          to="search"
        >
          Search
        </NavLink>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
};
