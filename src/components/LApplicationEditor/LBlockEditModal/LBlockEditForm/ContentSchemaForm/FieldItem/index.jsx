import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';

import FieldSubitem from '../FieldSubitem';

import MdRemoveCircleOutline from 'react-icons/lib/md/remove-circle_outline';

class FieldItem extends Component {
  render() {
    const { item, itemSchemaFields, onChange, onRemove } = this.props;

    return (
      <li>
      {
        map(itemSchemaFields, (field, index) =>
          (
            <FieldSubitem
              key={index}
              field={field}
              value={item[field.key]}
              onChange={partial(onChange, field.key)}
            />
          )
       )}
       <button className="btn btn-sm btn-danger" onClick={onRemove}>
       <MdRemoveCircleOutline />
       </button>
      </li>
    );
  }
}

FieldItem.propTypes = {
  itemSchemaFields: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FieldItem;