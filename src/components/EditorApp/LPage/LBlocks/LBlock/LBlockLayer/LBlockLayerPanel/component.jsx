import React, { PropTypes } from 'react';

import LBlockSettingsButton from './LBlockSettingsButton';
import LBlockViewChanger from './LBlockViewChanger';
import LBlockPositionChanger from './LBlockPositionChanger';
// import LBlockLayerViewInfo from 'components/LBlockLayerViewInfo';

import './index.scss';

const LBlockLayerPanel = (
  {
    hasMultipleViews,
    hasMultipleBlocks,

    onEditingStart,

    onViewSwitchNext,
    onViewSwitchPrev,

    onMouseEnter,
    onMouseLeave,

    onBlockPositionDown,
    onBlockPositionUp,
  }) => (
    <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="LBlockLayerPanel">
      <div className="LBlockLayerPanel-actions">
        {hasMultipleViews &&
          <LBlockViewChanger
            onViewSwitchNext={onViewSwitchNext}
            onViewSwitchPrev={onViewSwitchPrev}
          />
        }
        <LBlockSettingsButton onEditingStart={onEditingStart} />
      </div>
    </div>
  );

LBlockLayerPanel.propTypes = {
  onEditingStart: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func,
  onBlockPositionDown: PropTypes.func,

  hasMultipleBlocks: PropTypes.bool.isRequired,
  hasMultipleViews: PropTypes.bool.isRequired,

  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default LBlockLayerPanel;
