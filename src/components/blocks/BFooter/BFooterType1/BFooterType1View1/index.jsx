import React from 'react';

import reduce from 'lodash/reduce';
import size from 'lodash/size';

import StringEditable from 'components/primitives/StringEditable';

const BFooterType1View1 = (data) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-inline">
            {
              reduce(data.items, (acc, item, index) => {
                acc.push((
                  <li className="list-inline-item" key={index + '-item'}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ));

                if (size(data.items) > 1 && index < size(data.items) - 1) {
                  acc.push(
                    <li className="footer-menu-divider list-inline-item" key={index + '-divider'}>⋅</li>
                  );
                }

                return acc;
              }, [])
            }
          </ul>
          <StringEditable
            className="copyright text-muted small"
            data={data}
            fieldName="copyrightText"
            tagName="p"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default BFooterType1View1;