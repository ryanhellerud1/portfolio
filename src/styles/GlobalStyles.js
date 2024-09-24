import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #0077b6;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;