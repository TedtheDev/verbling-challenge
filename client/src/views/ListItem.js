import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {expand: false};

        this.expand = this.expand.bind(this);
    }

    expand() {
        this.setState({expand: !this.state.expand});
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.expandAll !== null) {
            this.setState({expand: nextProps.expandAll});
            this.props.resetExpandAllState();
        }
    }

    render() {
        const renderListItem = (expandClass, text) => {
            return <li className={expandClass} onClick={this.expand}><div>{text}</div></li>;
        };

        if(this.state.expand) {
            return renderListItem('expand', this.props.text);
        }

        return (
            renderListItem('', `${this.props.text.substring(0,30)}...`)
        )
    }
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    resetExpandAllState: PropTypes.func.isRequired,
    expandAll: PropTypes.object
}