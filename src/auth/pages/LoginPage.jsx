import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login('Francisco Cienfuegos');

    const pathname = localStorage.getItem('pathname') || '/';

    navigate(pathname, {
      replace: true,
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <button className="login-button" onClick={onLogin}>
        Login ➡
      </button>
    </>
  );
};
