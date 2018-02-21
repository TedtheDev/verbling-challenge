import React from 'react';

import Title from './Title';
import ListContainer from './ListContainer';
import UserActionButtons from './UserActionButtons';

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Title />
        <ListContainer />
        <UserActionButtons />
      </div>
    )
  }
}