import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: SF UI Display;
}

body{
  background-color: white;
  margin: 0;
  padding: 0;
}

html,body,#root{
  height: 100%;
}
`;
