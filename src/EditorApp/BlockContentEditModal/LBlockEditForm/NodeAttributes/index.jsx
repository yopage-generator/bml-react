import React, { Component, PropTypes } from 'react';

import Attribute from './Attribute';
import get from 'lodash/get';
import partial from 'lodash/partial';

class NodeAttributes extends Component {
  shouldComponentUpdate(nextProps) {
    const should =  this.props.attributes !== nextProps.attributes;
    return should;
  }

  render() {
    const { attributes = {}, uuid, onChange } = this.props;

    return (
      <div className="TabPage">
        <Attribute
          attribute="id"
          description="Аттрибут id у тега блока"
          placeholder="Введите идентификатор блока"
          title="Идентификатор блока (якорь)"
          value={get(attributes, 'id') || uuid}
          onChange={partial(onChange, 'id')}
        />
        <Attribute
          attribute="class"
          description="Аттрибут class у тега блока"
          placeholder="Введите название класса у блока"
          title="Класс блока"
          value={get(attributes, 'class')}
          onChange={partial(onChange, 'class')}
        />
      </div>
    );
  }
}

NodeAttributes.propTypes = {
  attributes: PropTypes.object,
  uuid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NodeAttributes;