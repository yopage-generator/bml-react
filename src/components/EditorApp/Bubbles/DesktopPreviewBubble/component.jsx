import React, { PropTypes } from 'react';
import Icon from 'react-icons/lib/md/desktop-windows';
import { Link } from 'react-router';
import SuperBubble from 'components/ui-elements/SuperBubble';

const DesktopPreviewBubble = ({ variantUuid }) => (
  <Link
    to={`/editor/${variantUuid}/preview`}
    data-tip="Предпросмотр на полный экран"
    className="IconLink"
  >
    <SuperBubble>
      <Icon className="SuperBubble--icon" />
    </SuperBubble>
  </Link>
);

DesktopPreviewBubble.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default DesktopPreviewBubble;