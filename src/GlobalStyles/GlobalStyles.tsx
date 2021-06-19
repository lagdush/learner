import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* @font-face {
   font-family: 'radnika_next';
   src: url('/static/radnikanext-medium-webfont.woff2');
   format:('woff2');
   font-weight: normal;
   font-style: normal;
} */
html {
   box-sizing: border-box;
   font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1600 - 320)));
   background-color: #edf5e1;
}
*, *:before, *:after{
   box-sizing: inherit;
      padding: 0;
      margin: 0;
}
body {
  font-family: 'Merriweather Sans', -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  'Roboto',
  'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   line-height: 2;
}
`;

export default GlobalStyles;
