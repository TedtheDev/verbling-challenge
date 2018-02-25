import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addListItem } from '../actions/index';
import { Button } from 'semantic-ui-react';

class UserActionButtons extends Component {
    
    promptUserToAddListItem() {
        const result = window.prompt('Enter the list item you want to add');
        this.props.addListItem(result);
    }

    render() {
        return (
            <div className="user-buttons">
                <Button secondary onClick={this.props.openAllListItems} type="button">Open All</Button>
                <Button secondary onClick={this.props.closeAllListItems} type="button">Close All</Button>
                <Button secondary onClick={this.props.toggleAllListItems} type="button">Toggle All</Button>
                <Button primary className="btn-add" onClick={this.promptUserToAddListItem} type="button">Add</Button>
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