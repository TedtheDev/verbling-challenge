import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class ListContainer extends Component {
    
    renderListItems(listItems) {
        return listItems.map((listItem, index) => {
            return <ListItem 
                        key={index} 
                        text={listItem} 
                        resetExpandAllState={this.props.resetExpandAllState} 
                        expandAll={this.props.expandAll} 
                    />;
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

ListContainer.propTypes = {
    expandAll: PropTypes.object,
    resetExpandAllState: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        listItems: state.listItems
    }
}

export default connect(mapStateToProps)(ListContainer);