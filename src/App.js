import React, { Component, Fragment } from 'react';
import './App.css';
import Block_chain from './containers/Block_chain';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
      <h1>Hey</h1>
      <Block_chain />
      </Fragment>
    )
  }
}

export default App;
