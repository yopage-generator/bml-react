import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ModalTitle = ({ children, className }) => (
  <h4 className={classnames('modal-title', className)}>
    {children}
  </h4>
);

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ModalTitle;
