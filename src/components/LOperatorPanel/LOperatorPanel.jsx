import React, { Component, PropTypes } from 'react';

import LOperatorSaveButton from 'components/LOperatorSaveButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TRANSITION_TIMEOUT } from 'constants/animation';

import './LOperatorPanel.css';

import Bubble from 'components/ui-elements/Bubble';

class LOperatorPanel extends Component {
  componentDidUpdate() {
    window.onbeforeunload = this.props.hasUnsavedChanges
      ? () => 'Хотите закрыть конструктор, не сохранив изменения?'
      : null;
  }
  render() {
    const { exitUrl, hasUnsavedChanges, isSaving, isEditMode, onSaveChanges, hasControlActivity } = this.props;

    if (!isEditMode) { return false; }

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="animation"
        transitionEnterTimeout={TRANSITION_TIMEOUT}
        transitionLeaveTimeout={TRANSITION_TIMEOUT}
        >{hasControlActivity && (
          <div className="LOperatorPanel">
            {hasUnsavedChanges &&
              <LOperatorSaveButton onSaveChanges={onSaveChanges} isSaving={isSaving} />
              }
            <Bubble icon="times" url={exitUrl} />
          </div>)}
      </ReactCSSTransitionGroup>
    );
  }
}

LOperatorPanel.propTypes = {
  exitUrl: PropTypes.string,
  isSaving: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool,
  onSaveChanges: PropTypes.func.isRequired,
};

export default LOperatorPanel;
