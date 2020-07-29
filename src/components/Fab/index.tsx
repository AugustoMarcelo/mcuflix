import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  to: string;
}

const Fab: React.FC<Props> = ({ to }) => {
  return (
    <Container to={to}>
      <FiPlus size={20} color="#fff" />
    </Container>
  );
}

export default Fab;
