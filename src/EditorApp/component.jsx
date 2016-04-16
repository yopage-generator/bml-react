import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import BlockContentEditModal from './BlockContentEditModal';
import LeftPanelMenu from './LeftPanelMenu';

import ReactTooltip from 'react-tooltip';

import Tracker from 'components/Tracker';
import ActivityController from 'components/ActivityController';

import LeftToolbar from './LeftToolbar';
import PreviewToolbar from './PreviewToolbar';

import BaselineGrid from 'components/BaselineGrid';

import './index.scss';

class EditorApp extends Component {
  render() {
    return (
      <Tracker>
        <ActivityController>
          <BodyClassName className="EditorApp">

            <div>
              <div className="EditorApp-content">
                <BaselineGrid />
                <LPage />
              </div>

              <LeftToolbar />
              <PreviewToolbar />
              <LBlockAddModal />
              <BlockContentEditModal />
              <LeftPanelMenu />

              <ReactTooltip />
            </div>

          </BodyClassName>
        </ActivityController>
      </Tracker>
    );
  }
}

export default EditorApp;
