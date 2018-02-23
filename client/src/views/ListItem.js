import React, { Component } from 'react';

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
        this.setState({expand: nextProps.expandAll})
    }

    render() {
        return (
            <li className={this.state.expand && 'expand' || ''} onClick={this.expand}>{this.props.text}</li>
        )
    }
}