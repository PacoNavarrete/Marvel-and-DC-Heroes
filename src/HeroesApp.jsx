import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';


const HeroesApp = function () {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
