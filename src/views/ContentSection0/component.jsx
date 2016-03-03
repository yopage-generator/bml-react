import React, { Component } from 'react';
import { Types } from 'views/types';
import { applyType } from 'views/utils';
import StringEditable from 'components/primitives/StringEditable';
import RichEditable from 'components/primitives/RichEditable';
import Image from 'views/elements/Image';

// import { Link } from 'react-router';

class ContentSection0 extends Component {
  render() {
    /* eslint-disable react/prop-types */
    const { content } = this.props;
    /* eslint-enable */

    return (
      <div className="BML-section-padding bg-secondary text-center">
        <div className="row mb40 mb-xs-0">
          <div className="col-sm-12 text-center">
            <StringEditable
              className="BML-h2 color-primary"
              data={content}
              fieldName="header"
              tagName="h2"
            />
          </div>
        </div>
        <div className="row mb64 mb-xs-24">
          <div className="col-sm-12 text-center spread-children-large">
            <Image {...content.image} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <RichEditable
              className="lead"
              data={content}
              fieldName="leadText"
              tagName="div"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default applyType(ContentSection0, Types.contentSection);
