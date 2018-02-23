import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ListItemPrompt extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.modal = document.getElementById('modal');
    }

    componentDidMount() {
        this.modal.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modal.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }

}