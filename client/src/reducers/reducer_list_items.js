import {
    FETCH_LIST_ITEMS,
    ADD_LIST_ITEM,
    SEARCH_LIST_ITEMS
} from '../actions/types';

// List Item Reducer
// Holds all list item for state
// 3 Types: AddListItem, FetchListItems, SearchListItems
export default function(state = [], action) {
    switch(action.type) {
        case ADD_LIST_ITEM:
            const newState = [...[action.payload], ...state];
            localStorage.setItem('listItems', JSON.stringify(newState));
            return newState;
        case FETCH_LIST_ITEMS:
            return action.payload;
        case SEARCH_LIST_ITEMS:
            const listItems = searchListItemsWithSearchTerm(action.payload, state);
            return listItems;
        default:
            return state;
    }
}

/**
 * Searches all List Items within List Item State
 * with desired Search Term using RegEx
 * @param {string} searchTerm 
 * @param {array} state 
 */
const searchListItemsWithSearchTerm = (searchTerm, state) => {
    if(searchTerm != '') {
        const listItems = JSON.parse(localStorage.getItem('listItems'));
        const pattern = new RegExp(`${searchTerm}`, 'i')
        return listItems.filter(listItem => listItem.match(pattern))
    }
    return JSON.parse(localStorage.getItem('listItems'));
}