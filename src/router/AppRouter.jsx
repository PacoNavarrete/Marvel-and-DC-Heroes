import { Routes, Route } from 'react-router-dom';
import { DCPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="dc" element={<DCPage />} />
      <Route path="marvel" element={<MarvelPage />} />
      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
};
