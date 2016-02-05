import * as F from 'constants/fieldTypes';

import FieldString from 'components/LBlockEditForm/ContentSchemaForm/FieldString';
import FieldNumber from 'components/LBlockEditForm/ContentSchemaForm/FieldNumber';
import FieldText from 'components/LBlockEditForm/ContentSchemaForm/FieldText';
import FieldImage from 'components/LBlockEditForm/ContentSchemaForm/FieldImage';
import FieldLocation from 'components/LBlockEditForm/ContentSchemaForm/FieldLocation';
import FieldDropdownList from 'components/LBlockEditForm/ContentSchemaForm/FieldDropdownList';

import FieldItems from 'components/LBlockEditForm/ContentSchemaForm/FieldItems';

export const FIELD_COMPONENTS = {
  [F.FIELD_TYPE_STRING]: FieldString,
  [F.FIELD_TYPE_TEXT]: FieldText,
  [F.FIELD_TYPE_IMAGE]: FieldImage,
  [F.FIELD_TYPE_URL]: FieldString,
  [F.FIELD_TYPE_HTML]: FieldText,
  [F.FIELD_TYPE_NUMBER]: FieldNumber,
  [F.FIELD_TYPE_LOCATION]: FieldLocation,
  [F.FIELD_TYPE_DROPWODN_LIST]: FieldDropdownList,

  [F.FIELD_TYPE_ITEMS]: FieldItems,
};
