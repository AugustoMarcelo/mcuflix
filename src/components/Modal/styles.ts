import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ReactModalResponsive = styled(ReactModal)`
  position: absolute;

  @media(max-width: 800px) {
    width: unset !important;
    top: 75% !important;
  }
`;
