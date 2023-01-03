import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {
  const { authState, logout } = useContext(AuthContext);
  const { user } = authState;

  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

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
          to="search"
        >
          Search
        </NavLink>
      </div>
      <div>
        <p>user logged: {user?.name || 'Not logged'}</p>
      </div>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
