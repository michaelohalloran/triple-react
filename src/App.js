import React, { Component } from 'react';
import './App.css';
import Column from './Column';

class App extends Component {

  state = {
    cards: [
        {id: 1, text: 'Sample text 1'},
        {id: 2, text: 'Sample text 2'}
    ]
}

  render() {
    return (
      <div className="col-container">
        <Column style={{backgroundColor: '8E6E95'}} cards={this.state.cards} name="Matt"/>
        <Column style={{backgroundColor: '39A59C'}} cards={this.state.cards} name="Bill"/>
        <Column style={{backgroundColor: '344759'}} cards={this.state.cards} name="James"/>
        <Column style={{backgroundColor: 'E8741E'}} cards={this.state.cards} name="Sam"/>
      </div>
    );
  }
}

export default App;
