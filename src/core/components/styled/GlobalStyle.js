import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import { theme } from '../../styles';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: auto;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    background-color: ${theme.bodyBackgroundColor};
    font-family: ${theme.fontFamilyBase};
    font-size: ${theme.fontSizeBase};
    color: ${theme.brandDefault};
  }

  ::selection {
    background-color: ${transparentize(0.8, theme.brandPrimary)};
  }


  h1 {
    font-size: 30px;
    margin: 0 0 20px;
  }

  h2 {
    font-size: 26px;
    margin: 0 0 15px;
  }

  h3 {
    font-size: 22px;
    margin: 0 0 10px;
  }

  h4 {
    font-size: 18px;
    margin: 0 0 10px;
  }

  h5 {
    font-size: 14px;
    margin: 0 0 10px;
  }

  h6 {
    font-size: 12px;
    margin: 0 0 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
