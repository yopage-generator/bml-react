import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from 'components/LPage';
import LBlockAddModal from 'components/LBlockAddModal';
import LBlockEditModal from 'components/LBlockEditModal';

import EditorRightSidebar from 'components/EditorRightSidebar';

import CogIcon from 'react-icons/fa/cog';
import './index.css';

class LApplication extends Component {
  render() {
    const { onActivity } = this.props;
    return (
      <BodyClassName className="Editor">
        <div className="LApplicationEditor" onMouseMove={onActivity} onContextMenu={onActivity}>
          <div className="LApplicationEditor-sidebar">
            <CogIcon />
          </div>
          <div className="LApplicationEditor-content">
            <LPage />
          </div>
          <EditorRightSidebar />
          <LBlockAddModal />
          <LBlockEditModal />
        </div>
      </BodyClassName>
    );
  }
}

LApplication.propTypes = {
  onActivity: PropTypes.func.isRequired,
};

export default LApplication;
