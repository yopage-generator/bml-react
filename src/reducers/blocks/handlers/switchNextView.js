import map from 'lodash/map';

import { viewsRepository } from 'repositories/ViewsRepository';

export default (state, action) => {
  const { uuid } = action.payload;

  return map(state, (block) => {
    if (block.uuid === uuid) {
      const nextView = viewsRepository.getNextView(block.viewName);
      if (nextView) {
        return { ...block, viewName: nextView.viewName };
      }
    }

    return block;
  });
};
