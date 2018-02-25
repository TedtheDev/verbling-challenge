import React from 'react';
import Title from './Title';
import ListContainer from './ListContainer';
import UserActionButtons from './UserActionButtons';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Verbling Challenge', expandAll: null, toggle: false};

    this.openAllListItems = this.openAllListItems.bind(this);
    this.closeAllListItems = this.closeAllListItems.bind(this);
    this.toggleAllListItems = this.toggleAllListItems.bind(this);

    this.resetExpandAllState = this.resetExpandAllState.bind(this);
  }

  resetExpandAllState() {
    this.setState({expandAll: null});
  }

  openAllListItems() {
    this.setState({ expandAll: true});
  }

  closeAllListItems() {
    this.setState({ expandAll: false});
  }

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