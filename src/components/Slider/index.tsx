import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

const Slider: React.FC = ({ children }) => (
  <Container>
    <SlickSlider
      dots={false}
      speed={300}
      infinite={React.Children.count(children) > 1}
      variableWidth
      adaptiveHeight
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
