import React from 'react';

const UserActionButtons = ( ) => {
    return (
        <div className="user-buttons">
            <button type="button">Open All</button>
            <button type="button">Close All</button>
            <button type="button">Toggle All</button>
            <button className="btn-add"type="button">Add</button>
        </div>
    )
}

export default UserActionButtons;