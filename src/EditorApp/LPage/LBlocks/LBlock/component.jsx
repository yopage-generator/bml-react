import React, { Component, PropTypes } from 'react';
import partial from 'lodash/partial';
import BlockSettingsPanel from './BlockSettingsPanel';
import { findDOMNode } from 'react-dom';
import Animated from 'components/primitives/Animated';

import ViewComponent from 'components/shared/ViewComponent';

import './index.css';

// Minimal visible height of block to show SettingsPanel
//
const MIN_HEIGHT = 90;

class LBlock extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      settingsFixed: false,
      settingsVisible: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const should = nextProps.block != this.props.block ||
      nextState.settingsVisible != this.state.settingsVisible ||
      nextState.settingsFixed != this.state.settingsFixed;
    return should;
  }

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

  getChildContext() {
    const { block, onContentChange } = this.props;

    return {
      onContentChange: partial(onContentChange, block.uuid),
    };
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    const element = findDOMNode(this);
    const rect = element.getBoundingClientRect()


    const visible = rect.bottom > MIN_HEIGHT;
    const fixed = rect.top < 0;

    this.setState({
      settingsFixed: fixed,
      settingsVisible: visible,
    });
  }

  render() {
    const { block } = this.props;

    return (
      <div className="LBlock">
        <Animated>
          {this.state.settingsVisible && <BlockSettingsPanel block={block} fixed={this.state.settingsFixed}/>}
        </Animated>
        <ViewComponent block={block} />
      </div>
    );
  }
}

LBlock.propTypes = {
  block: PropTypes.object.isRequired, // TODO block shape
  onContentChange: PropTypes.func.isRequired,
};

LBlock.childContextTypes = {
  onContentChange: PropTypes.func,
};

export default LBlock;
