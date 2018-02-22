import {
    FETCH_LIST_ITEMS,
    ADD_LIST_ITEM,
    SEARCH_LIST_ITEMS
} from './types';

/**
 * addListItem action creator
 * adds a list item to the redux store
 * @param {string} listItem 
 */
export const addListItem = (listItem) => {
    return {
        type: ADD_LIST_ITEM,
        payload: listItem
    }
}

/**
 * Search List Items action creator
 * searches all list items with searchTerm text
 * @param {string} searchTerm 
 */
export const searchListItems = (searchTerm) => {
    return {
        type: SEARCH_LIST_ITEMS,
        payload: searchTerm
    }
}