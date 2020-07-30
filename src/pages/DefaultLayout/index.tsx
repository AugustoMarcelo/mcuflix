import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </>
);

export default DefaultLayout;
