import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchListItems } from '../actions/index';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        this.onChangeSearchBarInput = this.onChangeSearchBarInput.bind(this);
    }

    /**
     * On Change function to change the value
     * of the Search Bar Input
     * @param {object} event
     */
    onChangeSearchBarInput(event){
        this.setState({ searchTerm: event.target.value })
        this.props.searchListItems(event.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <Input style={{width: '100%'}} type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onChangeSearchBarInput}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchListItems}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);