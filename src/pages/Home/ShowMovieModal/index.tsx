import React, { useMemo } from 'react';

import Modal from '../../../components/Modal';
import { IMovie } from '..';

import { Content, Info } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  movieInfo: IMovie;
}

const ShowMovieModal: React.FC<IModalProps> = ({ isOpen, setIsOpen, movieInfo }) => {
  const getYear = useMemo(
    () => movieInfo.release_date && new Date(movieInfo.release_date).getFullYear(),
    [movieInfo.release_date],
  );

  const getFormattedBoxOffice = useMemo(
    () => movieInfo.box_office && new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movieInfo.box_office),
    [movieInfo.box_office],
  );

  const getMoreInfo = useMemo(() => movieInfo.phase && `
    The film was released in ${getYear}, raising ${getFormattedBoxOffice}
    at the box office. It is part of phase ${movieInfo.phase}
    in the ${movieInfo.saga}. It also has ${movieInfo.post_credit_scenes}
    post-credit scenes.`,
  [movieInfo, getYear, getFormattedBoxOffice]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Content>
        <img src={movieInfo.cover_url} alt={movieInfo.title} />
        <Info $hasTrailer={!!movieInfo.trailer_url}>
          <h1>
            {movieInfo.title}
            {' '}
            (
            {getYear}
            )
          </h1>
          <small>
            Directed by
            {' '}
            {movieInfo.directed_by}
          </small>
          <p>{movieInfo.overview}</p>
          <p>{getMoreInfo}</p>
          <a
            href={movieInfo.trailer_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the trailer
          </a>
        </Info>
      </Content>
    </Modal>
  );
};

export default ShowMovieModal;
