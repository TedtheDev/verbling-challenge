import { combineReducers } from 'redux';
import listItemReducer from './reducer_list_items';

const rootReducer = combineReducers({
    listItems: listItemReducer
});

export default rootReducer;