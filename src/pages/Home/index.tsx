import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Fab from '../../components/Fab';
import Loading from '../../components/Loading';
import Carousel from '../../components/Carousel';
import Banner from '../../components/Banner';
import DefaultLayout from '../DefaultLayout';
import ShowMovieModal from './ShowMovieModal';

export interface IMovie {
  id: string;
  title: string;
  phase: number;
  saga?: string;
  trailer_url?: string;
  overview?: string;
  cover_url: string;
  box_office?: number;
  directed_by?: string;
  release_date?: Date;
  post_credit_scenes?: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieToShow, setMovieToShow] = useState<IMovie>({} as IMovie);
  const [phaseOne, setPhaseOne] = useState<IMovie[]>([]);
  const [phaseTwo, setPhaseTwo] = useState<IMovie[]>([]);
  const [phaseThree, setPhaseThree] = useState<IMovie[]>([]);
  const [comingSoon, setComingSoon] = useState<IMovie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get<{ data: IMovie[], total: number }>('movies');

      setPhaseOne(data.data.filter((movie) => movie.phase === 1));
      setPhaseTwo(data.data.filter((movie) => movie.phase === 2));
      setPhaseThree(data.data.filter((movie) => movie.phase === 3));
      setComingSoon(data.data.filter((movie) => movie.phase === null));

      const registeredMovies = localStorage.getItem('@mcuflix:movies');

      if (registeredMovies) {
        setComingSoon((state) => [...state, ...JSON.parse(registeredMovies)]);
      }
      setLoading(false);
    }

    loadMovies();
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function showMovieInfo(movie: IMovie): void {
    setMovieToShow(movie);
    toggleModal();
  }

  return (
    <DefaultLayout>
      {loading ? (
        <Loading sizeIcon={24} colorIcon="#fff" message="Loading Movies..." />
      ) : (
        <>
          <Banner />

          <Carousel title="Phase One" movies={phaseOne} showMovieInfo={showMovieInfo} />
          <Carousel title="Phase Two" movies={phaseTwo} showMovieInfo={showMovieInfo} />
          <Carousel title="Phase Three" movies={phaseThree} showMovieInfo={showMovieInfo} />

          <Carousel title="Coming Soon" movies={comingSoon} showMovieInfo={showMovieInfo} />
        </>
      )}

      <Fab to="/create" />
      <ShowMovieModal
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        movieInfo={movieToShow}
      />
    </DefaultLayout>
  );
};

export default Home;
