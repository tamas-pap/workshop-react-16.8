import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Markdown = styled(ReactMarkdown)`
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 30px 20px;
  overflow: auto;
  line-height: 1.5;

  h1 {
    font-size: 30px;
    margin: 20px 0;
  }

  h2 {
    font-size: 26px;
    margin: 30px 0 15px;
  }

  h3 {
    font-size: 22px;
    margin: 30px 0 10px;
  }

  h4 {
    font-size: 18px;
    margin: 20px 0 10px;
  }

  h5 {
    font-size: 14px;
    margin: 20px 0 10px;
  }

  h6 {
    font-size: 12px;
    margin: 20px 0 10px;
  }

  p {
    margin: 0 0 10px;
    font-size: 16px;
  }

  ul,
  ol {
    margin: 20px 0 30px 15px;
  }

  li {
    margin-bottom: 6px;
    font-size: 16px;
  }

  code:not(.hljs) {
    padding: 2px 4px;
    background-color: #fff2cf;
    font-size: 16px;
  }

  pre {
    margin-bottom: 20px;

    code {
      padding: 15px;
      border-radius: 8px;
      font-size: 16px;
    }
  }

  blockquote {
    margin: 20px 0 30px;
    padding: 10px;
    background: #fdf6e3;
    border-left: 6px solid #ffe9ae;

    p {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: underline;
  }
`;

export default Markdown;
