import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addListItem } from '../actions/index';

class UserActionButtons extends Component {
    
    promptUserToAddListItem() {
        const result = window.prompt('Enter the list item you want to add');
        this.props.addListItem(result);
    }

    render() {
        return (
            <div className="user-buttons">
                <button onClick={this.props.openAllListItems} type="button">Open All</button>
                <button onClick={this.props.closeAllListItems} type="button">Close All</button>
                <button onClick={this.props.toggleAllListItems} type="button">Toggle All</button>
                <button className="btn-add" onClick={this.promptUserToAddListItem} type="button">Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addListItem }, dispatch);
    
    /*
    return {
        addListItem: listItem => {
            console.log(listItem)
            dispatch(addListItem(listItem))
        }
    }*/
}

export default connect(null, mapDispatchToProps)(UserActionButtons);