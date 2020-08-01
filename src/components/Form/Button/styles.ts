import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-self: flex-end;

  height: 57px;
  min-width: 100px;
  font-size: 18px;
  border: 0;
  background: var(--primary);
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  @media(max-width: 800px) {
    align-self: stretch;
  }
`;
