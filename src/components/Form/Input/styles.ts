import styled, { css } from 'styled-components';

interface Props {
  isFilled: boolean;
}

export const Container = styled.div<Props>`
  position: relative;

  input {
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px 5px;
    margin-bottom: 20px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
      border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + span {
      transform: scale(.7) translateY(-10px);
      font-weight: 700;
    }

    ${({ isFilled }) => isFilled && css`
      & + span {
        transform: scale(.7) translateY(-10px);
        font-weight: 700;
      }
    `}
  }

  span {
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
  }
`;
