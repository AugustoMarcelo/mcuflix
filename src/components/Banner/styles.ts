import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: var(--white);
  height: 60vh;
  position: relative;
  background: url('https://i.ytimg.com/vi/mN_e5-fcGU4/maxresdefault.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const VideoIFrame = styled.iframe`
  border: 0;
  height: 300px;
  width: 450px;
  margin: 0 20px;
  border-radius: 4px;
`;
