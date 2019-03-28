import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DocumentTitle extends PureComponent {
  constructor(props) {
    super(props);
    const { children } = this.props;
    if (children) document.title = children;
  }

  componentWillReceiveProps({ children }) {
    if (children) document.title = children;
  }

  render() {
    return null;
  }
}

export default DocumentTitle;

DocumentTitle.propTypes = {
  children: PropTypes.node,
};

DocumentTitle.defaultProps = {
  children: undefined,
};
