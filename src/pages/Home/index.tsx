import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Fab from '../../components/Fab';
import Carousel from '../../components/Carousel';
import DefaultLayout from '../DefaultLayout';

export interface IMovie {
  id: string;
  title: string;
  phase: number;
  cover_url: string;
}

const Home: React.FC = () => {
  const [, setMovies] = useState<IMovie[]>([]);
  const [phaseOne, setPhaseOne] = useState<IMovie[]>([]);
  const [phaseTwo, setPhaseTwo] = useState<IMovie[]>([]);
  const [phaseThree, setPhaseThree] = useState<IMovie[]>([]);
  const [comingSoon, setComingSoon] = useState<IMovie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get<{ data: IMovie[], total: number }>('movies');

      setMovies(data.data);
      setPhaseOne(data.data.filter((movie) => movie.phase === 1));
      setPhaseTwo(data.data.filter((movie) => movie.phase === 2));
      setPhaseThree(data.data.filter((movie) => movie.phase === 3));
      setComingSoon(data.data.filter((movie) => movie.phase === null));

      const registeredMovies = localStorage.getItem('@mcuflix:movies');

      if (registeredMovies) {
        setComingSoon((state) => [...state, ...JSON.parse(registeredMovies)]);
      }
    }

    loadMovies();
  }, []);

  return (
    <DefaultLayout>

      <Carousel title="Phase One" movies={phaseOne} />
      <Carousel title="Phase Two" movies={phaseTwo} />
      <Carousel title="Phase Three" movies={phaseThree} />

      <Carousel title="Coming Soon" movies={comingSoon} />

      <Fab to="/create" />
    </DefaultLayout>
  );
};

export default Home;
