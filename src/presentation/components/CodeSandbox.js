import React from 'react';
import PropTypes from 'prop-types';
import { CodeSandbox as CodeSandboxContainer } from './styled';

const CodeSandbox = ({ id }) => (
  <CodeSandboxContainer
    title="codeSandbox"
    src={`https://codesandbox.io/embed/${id}?autoresize=1&view=editor`}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
);

CodeSandbox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CodeSandbox;
