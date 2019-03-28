import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Markdown as MarkdownContainer } from './styled';
import CodeBlock from './CodeBlock';

class Markdown extends PureComponent {
  state = { markdown: undefined };

  componentDidMount() {
    const { fileName } = this.props;
    this.loadMarkdown(fileName);
  }

  componentWillReceiveProps({ fileName }) {
    this.loadMarkdown(fileName);
  }

  loadMarkdown = fileName => {
    import(`../markdown/${fileName}`)
      .then(filePath => fetch(filePath.default))
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }));
  };

  render() {
    const { markdown } = this.state;
    return markdown ? <MarkdownContainer source={markdown} renderers={{ code: CodeBlock }} /> : null;
  }
}

Markdown.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default Markdown;
