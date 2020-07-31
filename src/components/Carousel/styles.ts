import styled from 'styled-components';

export const Container = styled.section`
  color: white;
  padding-top: 20px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  display: inline;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
`;

export const VideoList = styled.ul`
  display: flex;
  flex-direction: row;

  padding: 32px 0;
  overflow-x: auto;

  li {
    margin-right: 16px;
    transition: opacity 0.2s;

    img {
      height: 320px;
      border-radius: 8px;
    }

    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
