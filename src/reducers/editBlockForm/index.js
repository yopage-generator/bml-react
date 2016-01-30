import createReducer from 'helpers/createReducer';

import changeBlockField from './handlers/changeBlockField';

import {
  CANCEL_EDITING_BLOCK, START_EDITING_BLOCK, SUBMIT_EDITING_BLOCK,
} from 'actions/blocks';

import { CHANGE_NODE_ATTRIBUTE } from 'actions/editBlockForm';

const initialState = {
  block: {
    uuid: '',
    type: '',
    view: '',
    content: {},
    nodeAttributes: {},
    background: {},
    meta: {},
  },
};

const handlers = {
  [START_EDITING_BLOCK]: (state, action) => ({
    ...state,
    block: action.payload.block,
  }),

  [SUBMIT_EDITING_BLOCK]: () => initialState,
  [CANCEL_EDITING_BLOCK]: () => initialState,

  [CHANGE_NODE_ATTRIBUTE]: changeBlockField('nodeAttributes'),
};

export default createReducer(initialState, handlers);