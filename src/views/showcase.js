import React from 'react';

import Icon from '../components/icon';
import Input from '../components/input';
import Button from '../components/button';
import IconButton from '../components/iconButton';

const Showcase = () =>
  <div className="container">
    <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button primary>Button</Button>
      <Button primary disabled>Button</Button>
      <Button secondary>Button</Button>
      <Button secondary disabled>Button</Button>
    </div>
    <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <Icon name="logo" />
      <Icon name="plus" />
      <Icon name="ticks" />
      <Icon name="search" />
      <Icon name="checked" />
      <Icon name="unchecked" />
      <Icon name="open-in-new" />
    </div>
    <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <Input placeholder="Input" />
      <IconButton name="plus" color="#49c" />
      <IconButton name="checked" color="#49c" />
      <IconButton name="unchecked" color="#49c" />
      <IconButton name="open-in-new" color="#49c" />
    </div>
  </div>

export default Showcase;
