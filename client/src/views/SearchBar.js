import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchListItems } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        this.onChangeSearchBarInput = this.onChangeSearchBarInput.bind(this);
    }

    onChangeSearchBarInput(event){
        this.setState({ searchTerm: event.target.value })
        this.props.searchListItems(event.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onChangeSearchBarInput}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchListItems}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);