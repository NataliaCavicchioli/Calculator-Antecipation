import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
    border: none;
  }

  :root{
    --gray: #868E96;
    --gray-ligth: #F8F9FA;
    --blue-text: #5d93df;
    --white: #fff
  }
`;

export default GlobalStyle;
