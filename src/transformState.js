'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties':
        action.keysToRemove.forEach(e => delete state[e]);
        break;

      case action.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      
      default: return 'Error';
    }
  }
}

module.exports = transformState;
