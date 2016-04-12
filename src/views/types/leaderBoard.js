import { PropTypes } from 'react';
import blockPropType from './blockPropType';

export const RecordPropTypes = {
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  note: PropTypes.string,
};

export const TablePropTypes = {
  event: PropTypes.string.isRequired,
  division: PropTypes.string.isRequired,
  is_male: PropTypes.bool.isRequired,
  records: PropTypes.arrayOf(PropTypes.shape(RecordPropTypes)).isRequired,
};

export const DataPropTypes = {
  events: PropTypes.array.isRequired,
  divisions: PropTypes.array.isRequired,
  tables: PropTypes.arrayOf(PropTypes.shape(TablePropTypes)).isRequired,
};

const ContentPropTypes = {
  title: PropTypes.string,
  logo: PropTypes.object,
  collection_uuid: PropTypes.string,
  data: PropTypes.shape(DataPropTypes).isRequired,
};

export default {
  // Фактически это полное содержание block-а
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Логотип',
        key: 'logo',
        type: 'image',
        isRequired: false,
      },
      {
        title: 'Заголовок',
        key: 'title',
        type: 'string',
        isRequired: false,
      },
      {
        title: 'Источник результатов',
        key: 'collection_uuid',
        type: 'string',
        isRequired: true,
        defaultValue: '',
      },

      // data - данные с сервера
    ],
  },
};
