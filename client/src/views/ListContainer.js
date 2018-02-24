import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class ListContainer extends Component {
    
    renderListItems(listItems) {
        return listItems.map((listItem, index) => {
            return <ListItem 
                        key={index} 
                        text={listItem} 
                        resetExpandAllState={this.props.resetExpandAllState} 
                        expandAll={this.props.expandAll} 
                    />
            });
    }

    render() {
        return (
            <div className="list-container">
                <ul>
                    {
                        this.renderListItems(this.props.listItems)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listItems: state.listItems
    }
}

export default connect(mapStateToProps)(ListContainer);