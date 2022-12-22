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
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
};
