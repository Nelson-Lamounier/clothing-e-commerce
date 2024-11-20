import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Common Styles */
  * {
    margin: 0;
    padding: 0;
    
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --primary-color: #2b81e4;
    --secondary-color: #eee;
    --white-color: #fff;
    --grey-color: #555;
    --light-grey-color: #777;
  }

 
`;