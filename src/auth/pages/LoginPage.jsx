import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true,
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <button className='login-button' onClick={onLogin}>Login ➡</button>
    </>
  );
};
