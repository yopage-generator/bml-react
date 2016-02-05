import { PropTypes } from 'react';
import CustomPropTypes from 'constants/customPropTypes';

const NavbarContentType = {
  logoText: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // TODO array of shape
};

const Navbar = {
  typeName: 'Navbar',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(NavbarContentType).isRequired,
    form: PropTypes.object,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Бренд',
        key: 'logoText',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Меню',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 7,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
            {
              title: 'Ссылка',
              key: 'url',
              type: 'url',
              isRequired: true,
            },
          ],
        },
      },
    ],
  },
};

const InlineForm = {
  typeName: 'InlineForm',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    form: PropTypes.object,
    uuid: PropTypes.string.isRequired,
  },

  contentSchema: {
    version: 1,
    backgroundImage: false,
    form: 'required',
    fields: [
      {
        title: 'Заголовок',
        key: 'title',
        type: 'string',
        isRequired: false,
      },
    ],
  },
};

const PlaceType = PropTypes.shape({
  location: CustomPropTypes.location.isRequired,
  title: PropTypes.string,
});

const GoogleMapType = {
  center: CustomPropTypes.location.isRequired,
  zoom: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PlaceType).isRequired,
};

const GoogleMap = {
  propTypes: {
    content: PropTypes.shape(GoogleMapType).isRequired,
    form: PropTypes.object,
    uuid: PropTypes.string.isRequired,
  },

  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Координаты карты',
        key: 'center',
        type: 'location',
        isRequired: true,
      },
      {
        title: 'Масштаб',
        key: 'zoom',
        type: 'number',
        isRequired: true,
      },
      {
        title: 'Точки',
        key: 'places',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 20,
          fields: [
            {
              title: 'Координаты',
              key: 'location',
              type: 'location',
              isRequired: true,
            },
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: false,
            },
          ],
        },
      },
    ],
  },
};

const CTAContentType = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // TODO array of shape
};

const CTA = {
  propTypes: {
    content: PropTypes.shape(CTAContentType).isRequired,
    form: PropTypes.object,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 3,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
            {
              title: 'Ссылка',
              key: 'url',
              type: 'url',
              isRequired: false,
            },
          ],
        },
      },
    ],
  },
};

const MustReadContentType = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export const MustRead = {
  propTypes: {
    content: PropTypes.shape(MustReadContentType).isRequired,
    form: PropTypes.object,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Подзаголовок',
        key: 'subheader',
        type: 'text',
        isRequired: false,
      },
      {
        title: 'Кнопки',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 5,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              defaultValue: 'Название',
              isRequired: true,
            },
            {
              title: 'Ссылка',
              defaultValue: 'http://aydamaster.ru',
              key: 'url',
              type: 'url',
              isRequired: true,
            },
            {
              title: 'Иконка',
              defaultValue: 'diamond',
              key: 'icon',
              type: 'string',
              isRequired: false,
            },
          ],
        },
      },
    ],
  },
};

export const Types = {
  inlineForm: InlineForm,
  navbar: Navbar,
  googleMap: GoogleMap,
  cta: CTA,
  mustRead: MustRead,
};

export const makeView = (component, type) => {
  component.propTypes = type.propTypes;
  component.typeName = type.name;
  component.contentSchema = type.contentSchema;
  return component;
};
