import styled, { css } from 'styled-components';

interface IMovieInfoProps {
  $hasTrailer: boolean;
}

export const Content = styled.div`
  display: flex;

  padding: 20px;

  img {
    height: 400px;
    border: 2px solid white;
    border-radius: 4px;
    object-fit: contain;
  }

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Info = styled.div<IMovieInfoProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 45px;

  small {
    margin-bottom: 10px;
    opacity: 0.3;
  }

  p {
    text-align: justify;
    line-height: 21px;
  }

  p + p {
    margin: 10px 0;
  }

  a {
    align-self: stretch;
    border: 1px solid var(--primary);
    text-align: center;
    padding: 10px;
    color: var(--primary);
    margin-top: auto;
    font-weight: 700;
    text-transform: uppercase;
    transition: opacity 0.2s;

    ${({ $hasTrailer }) => !$hasTrailer
      && css`
        cursor: not-allowed;
        border-color: var(--blackLighter);
        color: var(--blackLighter);
      `}

    &:hover {
      opacity: 0.3;
    }
  }

  @media(max-width: 800px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
