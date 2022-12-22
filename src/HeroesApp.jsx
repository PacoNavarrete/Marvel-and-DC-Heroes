import { AppRouter } from './router/AppRouter';
import { NavBar } from './ui/components/NavBar'

const HeroesApp = function () {
  return (
    <>
      <NavBar/>
      <h1>Heroes App</h1>
      <AppRouter />
    </>
  );
};

export default HeroesApp;
