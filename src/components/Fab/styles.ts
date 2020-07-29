import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 32px;
  right: 32px;

  height: 60px;
  width: 60px;
  border: 0;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#DB202C')};
  }
`;