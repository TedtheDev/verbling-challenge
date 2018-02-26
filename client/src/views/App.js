import React from 'react';
import Title from './Title';
import ListContainer from './ListContainer';
import UserActionButtons from './UserActionButtons';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Verbling Challenge', expandAll: null, toggle: false};

    // bind all functions with this
    this.openAllListItems = this.openAllListItems.bind(this);
    this.closeAllListItems = this.closeAllListItems.bind(this);
    this.toggleAllListItems = this.toggleAllListItems.bind(this);
    this.resetExpandAllState = this.resetExpandAllState.bind(this);
  }

  /**
   * Function to act as a callback to reset expandAll state
   * so components update on state change if you open a list item
   * by a click, then push close all, it rerenders the list item
   */
  resetExpandAllState() {
    this.setState({expandAll: null});
  }

  // Opens all List Items to add .expand
  openAllListItems() {
    this.setState({ expandAll: true});
  }

  // Closes all List Items to delete .expand 
  closeAllListItems() {
    this.setState({ expandAll: false});
  }

  // Toggles open and close List Items
  toggleAllListItems() {
    this.setState({ expandAll: !this.state.toggle, toggle: !this.state.toggle });
  }
  
  render() {
    return (
      <div className="app">
        <Title 
          title={this.state.title} 
        />
        <SearchBar />
        <ListContainer 
          expandAll={this.state.expandAll}
          resetExpandAllState={this.resetExpandAllState}
        />
        <UserActionButtons  
          openAllListItems={this.openAllListItems}
          closeAllListItems={this.closeAllListItems}
          toggleAllListItems={this.toggleAllListItems}
        />
      </div>
    )
  }
}