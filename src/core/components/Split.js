import React from 'react';
import PropTypes from 'prop-types';
import { Split as SplitContainer } from './styled';

const gutterStyle = (dimension, gutterSize) => ({
  flexBasis: `${gutterSize}px`,
  height: '100%',
  backgroundColor: '#f2f2f5',
  cursor: 'col-resize',
});

const Split = ({ sizes, minSize, children }) => (
  <SplitContainer sizes={sizes} minSize={minSize} gutterSize={8} gutterStyle={gutterStyle}>
    {children}
  </SplitContainer>
);

Split.propTypes = {
  sizes: PropTypes.array.isRequired,
  minSize: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Split;
