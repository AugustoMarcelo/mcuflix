import React from 'react';
import logo from '../../assets/logo.png';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://www.alura.com.br/">
        <img src={logo} alt="Logo MCUFLIX" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </Container>
  );
}

export default Footer;
