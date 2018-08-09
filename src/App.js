import React, { Component } from 'react';

import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div>

        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <h1>Faire</h1>
      </div>
    );
  }
}

export default App;
