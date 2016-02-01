import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { greatPlaceStyle, greatPlaceStyleHover } from './styles.js';

export default class Place extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    text: PropTypes.string,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}