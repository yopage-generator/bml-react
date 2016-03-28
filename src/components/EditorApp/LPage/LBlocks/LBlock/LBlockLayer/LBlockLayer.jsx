import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';

import Animated from 'components/primitives/Animated';
import partial from 'lodash/partial';

import LBlockLayerPanel from './LBlockLayerPanel';

import './LBlockLayer.css';

const TIMEOUT = 500;

class LBlockLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isPanelHovered: false,
    };
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  onHover() {
    this.clearTimeout();
    this.setState({ isHovered: true });
    // this.props.onActive();
    // onActive={partial(onCurrentBlock, block.uuid)
    this.unhoverTimeout = window.setTimeout(
      () => this.setState({ isHovered: false }),
      TIMEOUT
    );
  }

  onUnHover() {
    this.clearTimeout();
  }

  clearTimeout() {
    if (this.unhoverTimeout) {
      window.clearTimeout(this.unhoverTimeout);
    }
  }

  render() {
    const {
      index, blocksCount,
      block, children, hasMultipleBlocks, hasMultipleViews,
      enablePanel,
      onBlockPositionDown, onBlockPositionUp, onEditingStart, onViewSwitchNext, onViewSwitchPrev,
    } = this.props;

    const layerClasses = classnames({
      LBlockLayer: true,
    });

    const { isHovered, isPanelHovered } = this.state;

    const onMouseEnter = this.onHover.bind(this);
    // const onMouseLeave = this.onUnHover.bind(this);

    const onPanelMouseEnter = () => {
      this.setState({ isPanelHovered: true });
      onMouseEnter();
    };

    const onPanelMouseLeave = () => {
      this.setState({ isPanelHovered: false });
    };

    const { isTopNav } = block;

    const enableMoveUp = index > 0;
    const enableMoveDown = index < blocksCount - 1;

    const SectionPanel = ( // TODO Вынести в отдельный компонент
      <Animated>
        {!isTopNav && enablePanel && (isHovered || isPanelHovered) && (
          <LBlockLayerPanel
            block={block}
            hasMultipleViews={hasMultipleViews}
            hasMultipleBlocks={hasMultipleBlocks}

            onMouseEnter={onPanelMouseEnter}
            onMouseLeave={onPanelMouseLeave}

            onEditingStart={partial(onEditingStart, block)}

            onViewSwitchNext={partial(onViewSwitchNext, block.uuid)}
            onViewSwitchPrev={partial(onViewSwitchPrev, block.uuid)}

            onBlockPositionDown={
              enableMoveDown ? partial(onBlockPositionDown, block.uuid) : undefined
            }
            onBlockPositionUp={
              enableMoveUp ? partial(onBlockPositionUp, block.uuid) : undefined
            }
          />
        )}
      </Animated>
    );

    return (
      <div className={layerClasses} onMouseMove={onMouseEnter} >
        {SectionPanel}
        {Children.only(children)}
      </div>
    );
  }
}

LBlockLayer.propTypes = {
  block: PropTypes.object.isRequired,
  children: PropTypes.node,

  blocksCount: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  hasMultipleBlocks: PropTypes.bool,
  hasMultipleViews: PropTypes.bool,
  enablePanel: PropTypes.bool,

  // onActive: PropTypes.func.isRequired,
  onBlockPositionDown: PropTypes.func,
  onBlockPositionUp: PropTypes.func,

  onEditingStart: PropTypes.func.isRequired,
  onViewSwitchNext: PropTypes.func.isRequired,
  onViewSwitchPrev: PropTypes.func.isRequired,
};

export default LBlockLayer;
