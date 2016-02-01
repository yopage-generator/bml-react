import React from 'react';

import get from 'lodash/get';
import partial from 'lodash/partial';

const NodeAttribute = ({
  attribute,
  description,
  placeholder,
  title,
  value,

  onChange,
}) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <fieldset className="form-group">
      <label htmlFor={attribute}>
        {title}
      </label>
      <input
        className="form-control"
        type="text"
        id={attribute}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {description &&
        <small className="text-muted">{description}</small>
      }
    </fieldset>
  );
};

const NodeAttributes = ({ attributes, onChange }) => (
  <div className="TabPage">
    <NodeAttribute
      attribute="id"
      description="Аттрибут id у тега блока"
      placeholder="Введите идентификатор блока"
      title="Идентификатор блока"
      value={get(attributes, 'id')}
      onChange={partial(onChange, 'id')}
    />
    <NodeAttribute
      attribute="class"
      description="Аттрибут class у тега блока"
      placeholder="Введите название класса у блока"
      title="Класс блока"
      value={get(attributes, 'class')}
      onChange={partial(onChange, 'class')}
    />
  </div>
);

export default NodeAttributes;