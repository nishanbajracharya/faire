import React from 'react';

import TodoList from './todoList';
import Icon from '../components/icon';
import Input from '../components/input';
import Button from '../components/button';
import Search from '../components/search';
import IconButton from '../components/iconButton';

class Showcase extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      list: [
        { name: 'Item 1', desc: 'Item1 description', isCompleted: false },
        { name: 'Item 2', desc: 'Item2 description', isCompleted: true },
        { name: 'Item 3', desc: 'Item3 description', isCompleted: false },
      ]
    }
  }

  toggleTodo = item => {
    const index = this.state.list.findIndex(listItem => listItem === item);

    this.setState({
      list: this.state.list.map((item, id) => id === index ? {...item, isCompleted: !item.isCompleted}: item)
    })
  }

  filterTodo = (list, query) => list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  setSearchQuery = query => {
    this.setState({
      query
    })
  }

  render() {
    return <div className="container">
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
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Search placeholder="Input" onInput={this.setSearchQuery}/>
      </div>
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <TodoList list={this.filterTodo(this.state.list, this.state.query)} onClick={this.toggleTodo}/>
      </div>
    </div>
  }
}

export default Showcase;
