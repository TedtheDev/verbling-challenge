import React from 'react';

import SearchBar from './SearchBar';

const ListContainer = ( ) => {
    return (
        <div className="list-container">
            <SearchBar />
            <ul>
                <li>List Item 1</li>
            </ul>
        </div>
    )
}

export default ListContainer;