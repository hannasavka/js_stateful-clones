'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let newState = { ...state };
  const arr = [];

  for (const act of actions) {
    if (act.type === 'clear') {
      newState = {};
    }

    if (act.type === 'removeProperties') {
      for (const text of act.keysToRemove) {
        delete newState[text];
      }
    }

    if (act.type === 'addProperties') {
      Object.assign(newState, act.extraData);
    }
    arr.push({ ...newState });
  }

  return arr;

  // let currentState = { ...state };
  // const states = [currentState];

  // for (const act of actions) {
  //   let newState = { ...currentState };

  //   if (act.type === 'clear') {
  //     newState = {};
  //   }

  //   if (act.type === 'removeProperties') {
  //     for (const key of act.keysToRemove) {
  //       delete newState[key];
  //     }
  //   }

  //   if (act.type === 'addProperties') {
  //     Object.assign(newState, act.extraData);
  //   }

  //   currentState = newState;
  //   states.push(currentState);
  // }

  // return states;
}

module.exports = transformStateWithClones;
