import React from 'react';

import { Container, VideoIFrame } from './styles';

const Banner: React.FC = () => (
  <Container>
    <VideoIFrame
      title="Trailer"
      src="https://www.youtube.com/embed/7MIC4P306Cg"
      allowFullScreen
    />
  </Container>
);

export default Banner;
