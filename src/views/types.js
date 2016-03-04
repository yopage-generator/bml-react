import { PropTypes } from 'react';
import CustomPropTypes from 'constants/customPropTypes';

const LinkTypeSchemaFields = [
    {
      title: 'Текст',
      key: 'text',
      type: 'string',
      isRequired: true,
    },
    {
      title: 'Ссылка',
      key: 'href',
      type: 'url',
      isRequired: true,
    },
    {
      title: 'Target',
      key: 'target',
      type: 'string',
      isRequired: true,
    },
  ];

const ContentContentType = {
  text: PropTypes.string.isRequired,
};

const content = {
  typeName: 'Content',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(ContentContentType).isRequired,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};

const NavbarContentType = {
  logoLink: CustomPropTypes.link.isRequired,
  items: PropTypes.arrayOf(CustomPropTypes.link).isRequired,
};

const Navbar = {
  typeName: 'Navbar',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(NavbarContentType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Бренд',
        key: 'logoLink.text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Бренд (ссылка)',
        key: 'logoLink.href',
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
          fields: [ // TODO заменить на CustomPropType.link
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
    variantUuid: PropTypes.string.isRequired,
    content: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    form: CustomPropTypes.formContent.isRequired,
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
  typeName: 'GoogleMap',
  propTypes: {
    content: PropTypes.shape(GoogleMapType).isRequired,
    form: CustomPropTypes.formContent,
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
  typeName: 'CTA',
  propTypes: {
    content: PropTypes.shape(CTAContentType).isRequired,
    form: CustomPropTypes.formContent,
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
  typeName: 'MustRead',
  propTypes: {
    content: PropTypes.shape(MustReadContentType).isRequired,
    form: CustomPropTypes.formContent,
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
          ],
        },
      },
    ],
  },
};

const FooterType = {
  copyrightText: PropTypes.string,
  items: PropTypes.array.isRequired,
};

const Footer = {
  typeName: 'Footer',

  // Фактически это полное содержание block-а
  propTypes: {
    content: PropTypes.shape(FooterType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Копирайт',
        key: 'copyrightText',
        type: 'string',
        isRequired: false,
      },
      {
        title: 'Ссылки в меню',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 12,
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

const ContentSectionType = {
  header: PropTypes.string.isRequired,
  image: PropTypes.object,
  leadText: PropTypes.string,
  links: PropTypes.arrayOf(CustomPropTypes.link).isRequired,
};

const ContentSection = {
  typeName: 'ContentSection1',
  propTypes: {
    content: PropTypes.shape(ContentSectionType).isRequired,
    form: CustomPropTypes.formContent,
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
        title: 'Описание',
        key: 'leadText',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Картинка',
        key: 'image',
        type: 'image',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'links',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 5,
          fields: LinkTypeSchemaFields,
        },
      },
    ],
  },
};

const PlainHtmlPropType = {
  html: PropTypes.string.isRequired,
};

const PlainHtml = {
  typeName: 'PlainHTML',
  propTypes: {
    content: PropTypes.shape(PlainHtmlPropType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Чистый HTML',
        key: 'html',
        type: 'text',
        isRequired: true,
      },
    ]
  }
}

const HeaderListPropType = {
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
    }
  )).isRequired,
};

const HeaderList = {
  typeName: 'HeaderList',
  propTypes: {
    content: PropTypes.shape(HeaderListPropType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Список',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 30,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
          ],
        },
      },
    ]
  }
};

const HeaderTextPropType = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const HeaderText = {
  typeName: 'HeaderText',
  propTypes: {
    content: PropTypes.shape(HeaderTextPropType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Текст',
        key: 'text',
        type: 'text',
        isRequired: true,
      },
    ]
  }
};

const FeaturesPropType = {
  header: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(CustomPropTypes.feature).isRequired,
}

const HeadedFeatures = {
  typeName: 'HeadedFeatures',
  propTypes: {
    content: PropTypes.shape(FeaturesPropType).isRequired,
    form: CustomPropTypes.formContent,
    uuid: PropTypes.string.isRequired,
  },
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Возможности',
        key: 'features',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 6,
          fields: [
            {
              title: 'Возможность',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
            {
              title: 'Класс иконки',
              key: 'iconClass', // TODO Завести отдельный тип
              type: 'string',
              isRequired: true,
            },
          ],
        },
      },
    ]
  }
}

export const Types = {
  HeadedFeatures,
  content,
  PlainHtml,
  HeaderText,
  HeaderList,
  inlineForm: InlineForm,
  navbar: Navbar,
  googleMap: GoogleMap,
  cta: CTA,
  mustRead: MustRead,
  footer: Footer,
  contentSection: ContentSection,
};
