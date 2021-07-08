import initialState from './initialState';
import { reducer as dataManagementReducer } from './dataManagement';
import { reducer as userActionsReducer } from './userActions';

const reducers = [
  dataManagementReducer,
  userActionsReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
