import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: initial;
  }

  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.6
  }
`
