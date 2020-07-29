import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import Fab from '../../components/Fab';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import DefaultLayout from '../DefaultLayout';

export interface IMovie {
  id: string;
  title: string;
  phase: number;
  cover_url: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [phaseOne, setPhaseOne] = useState<IMovie[]>([]);
  const [phaseTwo, setPhaseTwo] = useState<IMovie[]>([]);
  const [phaseThree, setPhaseThree] = useState<IMovie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get<{ data: IMovie[], total: number }>('movies');

      setMovies(data.data);
      setPhaseOne(data.data.filter(movie => movie.phase === 1));
      setPhaseTwo(data.data.filter(movie => movie.phase === 2));
      setPhaseThree(data.data.filter(movie => movie.phase === 3));
    }

    loadMovies();
  }, []);

  return (
    <DefaultLayout>

      <Carousel title="Phase One" movies={phaseOne} />
      <Carousel title="Phase Two" movies={phaseTwo} />
      <Carousel title="Phase Three" movies={phaseThree} />

      <Fab to="/create" />
    </DefaultLayout>
  );
}

export default Home;
