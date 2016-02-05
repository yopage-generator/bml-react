import React from 'react';
import { Types, makeView } from 'views/types';
import StringEditable from 'components/primitives/StringEditable';

const ContentSection1 = ({ content }) => (
  <div className="content-section-a">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-sm-6">
          <hr className="section-heading-spacer" />
          <div className="clearfix" />
          <StringEditable
            className="section-heading"
            data={content}
            fieldName="headerText"
            tagName="h2"
          />
          <StringEditable
            className="lead"
            data={content}
            fieldName="leadText"
            tagName="p"
          />
        </div>
        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
          <img
            className="img-responsive"
            height={content.image.height}
            src={content.image.url}
            width={content.image.width}
          />
        </div>
      </div>
    </div>
  </div>
);

export default makeView(ContentSection1, Types.contentSection);
