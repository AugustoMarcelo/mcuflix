import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #DB202C;
    --black: #000000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5; 
    --white: #FFFFFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
  }

  #root {
    min-height: calc(100vh - 94px);
    display: flex;
    flex-direction: column;
  }

  html,
  body {
    font: 14px 'Roboto', sans-serif;
  }

  body {
    padding-top: 94px;
    background: #141414;

    @media (max-width: 800px) {
      padding-top: 60px;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;