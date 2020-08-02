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
  position: relative;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;

    position: absolute;
    left: -11rem;
    top: 0;
    z-index: 5;
    transition: transform 400ms linear;
    color: #111;
    background: #f5f5f5;
    padding: 10px;
    border-bottom-right-radius: 5px;

    strong {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  img {
    height: 320px;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  &:hover,
  &:focus {
    img {
      opacity: .5;
    }

    span {
      transform: translateX(11rem);
    }
  }
`;
