import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import itemReducer from './itemReducer';
import layout from './components/layout/reducer';
import datafiles from './components/datafiles/reducer';

export const rootReducer = combineReducers({
  layout,
  datafiles,
});
