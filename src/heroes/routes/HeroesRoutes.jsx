import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../../ui/components/NavBar';
import { DCPage, MarvelPage, HeroePage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="heroe" element={<HeroePage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="/" element={<Navigate to="marvel" />} />
      </Routes>
    </>
  );
};
