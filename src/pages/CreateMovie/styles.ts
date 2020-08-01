import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px auto;
  width: 95%;
  max-width: 600px;

  .box-message {
    width: 100%;
    margin: 20px 0;
    border: 2px solid #27ae60;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    transition: opacity 0.2s;

    strong {
      color: #27ae60;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Title = styled.h1`
  align-self: flex-start;

  color: #fff;
  margin: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
