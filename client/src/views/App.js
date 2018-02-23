import React from 'react';
import Title from './Title';
import ListContainer from './ListContainer';
import UserActionButtons from './UserActionButtons';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Verbling Challenge', expandAll: false};

    this.openAllListItems = this.openAllListItems.bind(this);
    this.closeAllListItems = this.closeAllListItems.bind(this);
    this.toggleAllListItems = this.toggleAllListItems.bind(this);
  }

  openAllListItems() {
    this.setState({ expandAll: true});
  }

  closeAllListItems() {
    this.setState({ expandAll: false});
  }

  toggleAllListItems() {
    this.setState({ expandAll: !this.state.expandAll });
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