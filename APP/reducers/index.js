// Reducers produce application data
// Will have two seperate Reducers
//  1 .Library Reducer 
//  2 . Selection Reducer



import { combineReducers } from 'redux'

import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'


export default combineReducers({
  
  //LibraryReducer is the reducer for generating List of libraries
  //returns states from LibraryReducer as state.libraries
  libraries : LibraryReducer,
  selectedLibraryId : SelectionReducer


});
