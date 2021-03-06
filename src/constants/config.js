import get from 'lodash/get';

export const EXAMPLE_LANDING_VARIANT_UUID = 'example';
export const AUTO_SAVE_TIMEOUT = 4000;

const defaults = {
  exitUrl: '/#exit',
  // apiUrl: 'http://api.bmland.dev:3008/v1',
  // postLeadUrl: 'http://bmland.dev:3008/leads',
  apiUrl: 'http://api.3008.vkontraste.ru/v1',
  postLeadUrl: 'http://3008.vkontraste.ru/leads',
  apiKey: 'test',
  variantUuid: EXAMPLE_LANDING_VARIANT_UUID,
};

export default (key) =>
  get(global.bmlConfig, key, get(defaults, key));
