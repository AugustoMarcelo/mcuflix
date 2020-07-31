import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  padding: 32px 0;

  .slick-prev,
  .slick-next {
    z-index: 10;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  transition: opacity 0.2s;

  img {
    height: 320px;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    opacity: .5;
  }
`;
