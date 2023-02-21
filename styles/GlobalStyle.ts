import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'); */
${reset}
* {
  box-sizing: border-box;
}
body {
  /* font-family: 'Source Sans Pro', sans-serif; */
  font-size: 13px;
  background-color: #fff;
  color:#000;
  }
 a {
    text-decoration : none;
    color: inherit;
    cursor: pointer;
  }
`;
