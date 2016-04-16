import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import { findDOMNode } from 'react-dom';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ListItem from 'material-ui/List/ListItem';
import IconUp from 'material-ui/svg-icons/navigation/arrow-upward';
import IconDown from 'material-ui/svg-icons/navigation/arrow-downward';
import IconRemove from 'material-ui/svg-icons/action/delete';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconForm from 'material-ui/svg-icons/action/description';
import IconBackground from 'material-ui/svg-icons/image/panorama';
import IconViews from 'material-ui/svg-icons/action/view-carousel';
import IconAttributes from 'material-ui/svg-icons/action/extension';

import Divider from 'material-ui/Divider';
import FaCog from 'react-icons/lib/fa/cog';
// import FaCog from 'react-icons/lib/md/extension';

import BubbleIcon from 'components/ui-elements/BubbleIcon';

import partial from 'lodash/partial';

import './index.scss';

class BlockSettingsPanel extends Component {
  constructor(props) {
    super(props);
    const { block } = props;
    const { uuid } = block;

    this.onStartContentEditing = partial(props.onStartContentEditing, block);
    this.onViewSwitchNext = partial(props.onViewSwitchNext, uuid);
    this.onBlockPositionUp = partial(props.onBlockPositionUp, uuid);
    this.onBlockPositionDown = partial(props.onBlockPositionDown, uuid);

    this.onDelete = partial(props.onDelete, uuid);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  componentDidMount() {
    this.setState({
      anchorEl: findDOMNode(this)
    });
  }

  render() {
    const {
      t,
      enable, block,
      schema,
      hasMultipleViews,
      enableMoveDown, enableMoveUp,

    } = this.props;

    if (!enable) {
      return (<noscript />);
    }

    return (
      <div className="LBlockSettingsButton">
        <BubbleIcon onClick={this.open} text={t('tips:block_settings')}>
          <FaCog />
        </BubbleIcon>
        <Popover
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          open={this.state.open}
          onRequestClose={this.close}
        >
				<Menu animateOpen onItemTouchTap={this.close}>
					<MenuItem primaryText="Изменить текст" leftIcon={<IconEdit />} onTouchTap={this.onStartContentEditing} />
					<MenuItem primaryText="Изменить форму" leftIcon={<IconForm />} onTouchTap={this.onStartContentEditing} disabled={!schema.form} />
					<MenuItem primaryText="Установить фон" leftIcon={<IconBackground />} onTouchTap={this.onStartContentEditing} disabled={!schema.backgroundImage} />
					<ListItem primaryText="Свойства блока" leftIcon={<IconAttributes />} secondaryText={block.viewName} onTouchTap={this.onStartContentEditing} />
					<Divider />
					<MenuItem primaryText="Сменить вид" leftIcon={<IconViews />} onTouchTap={this.onViewSwitchNext} disabled={!hasMultipleViews} />
					<MenuItem primaryText="Переместить выше" leftIcon={<IconUp />} onTouchTap={this.onBlockPositionUp} disabled={!enableMoveUp} />
					<MenuItem primaryText="Переместить ниже" leftIcon={<IconDown />} onTouchTap={this.onBlockPositionDown} disabled={!enableMoveDown} />
					<MenuItem primaryText="Удалить" value="del" leftIcon={<IconRemove />} onTouchTap={this.onDelete} />
				</Menu>
      </Popover>
    </div>
    );
  }
}

BlockSettingsPanel.propTypes = {
  t: PropTypes.func.isRequired,
  block: PropTypes.object.isRequired,
  enable: PropTypes.bool.isRequired,

  schema: PropTypes.object.isRequired,

  onStartContentEditing: PropTypes.func.isRequired,

  onViewSwitchNext: PropTypes.func.isRequired,

  onBlockPositionUp: PropTypes.func,
  onBlockPositionDown: PropTypes.func,

  hasMultipleViews: PropTypes.bool.isRequired,

  enableMoveDown: PropTypes.bool.isRequired,
  enableMoveUp: PropTypes.bool.isRequired,

  onDelete: PropTypes.func.isRequired,
};

export default translate('')(BlockSettingsPanel);
