import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 24px 16px;
  color: var(--white);
  text-align: center;

  img {
    width: 120px;
  }

  p {
    > a {
      text-decoration: none;
      font-weight: 700;
      color: var(--accent);
    }
  }
`;
