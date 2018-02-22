import React from 'react';
import Title from './Title';
import ListContainer from './ListContainer';
import UserActionButtons from './UserActionButtons';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Verbling Challenge' };
  }
  render() {
    return (
      <div className="app">
        <Title title={this.state.title} />
        <SearchBar />
        <ListContainer />
        <UserActionButtons />
      </div>
    )
  }
}