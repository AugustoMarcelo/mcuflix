import React from 'react';

import Slider from '../Slider';
import { SliderItem } from '../Slider/styles';

import { Container, Title } from './styles';
import { IMovie } from '../../pages/Home';

interface Props {
  title: string;
  movies: IMovie[];
}

const Carousel: React.FC<Props> = ({ title, movies }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Slider>
        {movies.map(movie => (
          <SliderItem key={movie.id}>
            <img src={movie.cover_url} alt="Movie cover" />
          </SliderItem>
        ))}
      </Slider>
    </Container>
  );
}

export default Carousel;
