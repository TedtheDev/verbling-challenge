import {
    FETCH_LIST_ITEMS,
    ADD_LIST_ITEM,
    SEARCH_LIST_ITEMS
} from '../actions/types';

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

const searchListItemsWithSearchTerm = (searchTerm, state) => {
    if(searchTerm != '') {
        const listItems = JSON.parse(localStorage.getItem('listItems'));
        const pattern = new RegExp(`${searchTerm}`)
        return listItems.filter(listItem => listItem.match(pattern))
    }
    return JSON.parse(localStorage.getItem('listItems'));
}