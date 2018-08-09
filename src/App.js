import React, { Component } from 'react';

import Icon from './components/icon';
import Input from './components/input';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button>Button</Button>
          <Button disabled>Button</Button>
          <Button primary>Button</Button>
          <Button primary disabled>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary disabled>Button</Button>
        </div>
        <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Icon name="logo" />
          <Icon name="plus" />
          <Icon name="ticks" />
          <Icon name="search" />
          <Icon name="checked" />
          <Icon name="unchecked" />
          <Icon name="open-in-new" />
        </div>
        <div style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input placeholder="Input" />
        </div>
      </div>
    );
  }
}

export default App;
