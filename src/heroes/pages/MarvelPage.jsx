import { HeroeFiltered } from '../components/HeroeFiltered';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
        <HeroeFiltered publisher={'Marvel Comics'} />
    </>
  );
};
