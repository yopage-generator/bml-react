import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import FullscreenIcon from 'react-icons/lib/md/desktop-windows';
// import FullscreenEditor from 'react-icons/lib/fa/edit';
// import FullscreenIcon from 'react-icons/lib/go/screen-full';
import MobileIcon from 'react-icons/lib/go/device-mobile';
import EditorSaveButton from './EditorSaveButton';

class EditorRightSidebar extends Component {
  render() {
    const { variantUuid } = this.props;
    return (
      <div className="EditorRightSidebar">
        <Link to={`/editor/${variantUuid}/preview`} className="IconLink">
          <FullscreenIcon />
        </Link>
        <Link to={`/editor/${variantUuid}/mobilePreview`} className="IconLink">
          <MobileIcon />
        </Link>
        <div className="EditorRightSidebar-bottom">
          <EditorSaveButton />
        </div>
      </div>
    );
  }
}


EditorRightSidebar.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default EditorRightSidebar;
