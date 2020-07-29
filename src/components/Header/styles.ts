import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  img {
    max-width: 168px;
  }

  @media (max-width: 800px) {
    height: 60px;
    justify-content: center;
    
    img {
      max-width: 105px;
    }
  }
`;