import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListContainer extends Component {
    
    renderListItems(listItems) {
        return listItems.map((listItem, index) => <li key={index}>{listItem}</li>);
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