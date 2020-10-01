import React from 'react';

import TodoList from './todoList';
import Icon from '../components/icon';
import Input from '../components/input';
import AddTodo from './todoList/addTodo';
import Button from '../components/button';
import Search from '../components/search';
import IconButton from '../components/iconButton';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const loremString = max => {
  let words = ['ad', 'adipisicing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum', 'commodo', 'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt', 'do', 'dolor', 'dolore', 'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et', 'eu', 'ex', 'excepteur', 'exercitation', 'fugiat', 'id', 'in', 'incididunt', 'ipsum', 'irure', 'labore', 'laboris', 'laborum', 'Lorem', 'magna', 'minim', 'mollit', 'nisi', 'non', 'nostrud', 'nulla', 'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis', 'reprehenderit', 'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit', 'veniam', 'voluptate'];
  var sentence = '';
  var count = max;
  while (count > 0) {
    let i = randomInt(0, words.length);
    let word = words[i];
    sentence = count === max ? word : sentence + ' ' + word;
    count = count - 1;
  }
  if (sentence.length) {
    sentence = sentence.slice(1);
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  return sentence;
};

export const getList = (count = 20) => Array.from(Array(count).keys()).map(i => (
  { name: loremString(Math.random() * 2 + 1), desc: loremString(Math.random() * 18 + 2), isCompleted: Math.random() > 0.5 }
));

class Showcase extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      list: getList(8)
    };
  }

  toggleTodo = item => {
    const index = this.state.list.findIndex(listItem => listItem === item);

    this.setState({
      list: this.state.list.map((item, id) => id === index ? {...item, isCompleted: !item.isCompleted}: item)
    });
  }

  filterTodo = (list, query) => list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  setSearchQuery = query => {
    this.setState({
      query
    });
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
      </div>
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <IconButton name="plus" color="#49c" />
        <IconButton name="checked" color="#49c" />
        <IconButton name="unchecked" color="#49c" />
        <IconButton name="open-in-new" color="#49c" />
      </div>
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Search placeholder="Input" onInput={this.setSearchQuery}/>
      </div>
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <AddTodo />
      </div>
      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <TodoList list={this.filterTodo(this.state.list, this.state.query)} onClick={this.toggleTodo}/>
      </div>
    </div>;
  }
}

export default Showcase;
