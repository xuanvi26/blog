import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import slideshow from './slideshow';

export default combineReducers({
 sampleReducer,
 slideshow
});