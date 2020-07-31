import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulseOpacity = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  animation: ${pulseOpacity} 1s linear infinite;

  svg {
    animation: ${rotate} 2s linear infinite;
  }

  span {
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
  }
`;
