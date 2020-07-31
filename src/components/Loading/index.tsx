import React from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

interface LoadingProps {
  sizeIcon: number;
  colorIcon?: string;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({
  sizeIcon,
  colorIcon = '#fff',
  message,
}) => (
  <Container>
    <FiLoader size={sizeIcon} color={colorIcon} />
    {message && <span>{message}</span>}
  </Container>
);

export default Loading;
