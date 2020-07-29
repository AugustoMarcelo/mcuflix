import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo da MCUFLIX" />
      </Link>
    </Container>
  );
}

export default Header;
