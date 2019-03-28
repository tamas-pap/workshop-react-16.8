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
