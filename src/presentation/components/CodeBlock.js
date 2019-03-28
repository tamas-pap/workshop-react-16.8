import React from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlightjs';

class CodeBlock extends React.PureComponent {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setCodeRef = ref => {
    this.codeRef = ref;
  };

  highlightCode() {
    highlight.highlightBlock(this.codeRef);
  }

  render() {
    const { language, value } = this.props;
    return (
      <pre>
        <code ref={this.setCodeRef} className={language && `language-${language}`}>
          {value}
        </code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string.isRequired,
};

CodeBlock.defaultProps = {
  language: undefined,
};

export default CodeBlock;
