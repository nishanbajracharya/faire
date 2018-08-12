import React from 'react';

import Modal from '../components/modal';
import ROUTES from '../constants/routes';
import Search from '../components/search';
import TodoList, { AddTodo } from './todoList';

import { getList } from './showcase';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      query: '',
      list: getList(),
      newTodoName: ''
    }
  }

  addTodo = () => this.state.newTodoName && this.setState({
    newTodoName: '',
    list: [{ name: this.state.newTodoName, desc: '', isCompleted: false }, ...this.state.list]
  })

  setNewTodoName = newTodoName => this.setState({ newTodoName })

  toggleTodo = item => {
    const index = this.state.list.findIndex(listItem => listItem === item);

    this.setState({
      list: this.state.list.map((item, id) => id === index ? { ...item, isCompleted: !item.isCompleted } : item)
    })
  }

  searchTodo = (list, query) => list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  filterTodo = (list, filter) => {
    switch (filter) {
      case 'COMPLETED':
        return list.filter(item => item.isCompleted);
      case 'REMAINING':
        return list.filter(item => !item.isCompleted);
      default:
        return list;
    }
  }

  setSearchQuery = query => this.setState({ query })

  render() {
    return <div className="container full-width main-content">
      <Search placeholder="Search for a task" onInput={this.setSearchQuery} />
      <div className="todo-container">
        <AddTodo onInput={this.setNewTodoName} add={this.addTodo} />
        <TodoList list={this.filterTodo(this.searchTodo(this.state.list, this.state.query), this.props.filter)} onClick={this.toggleTodo} />
      </div>
    </div>;
  }
}

const withCompletedFilter = Component => props => {
  const filter = (() => {
    switch (props.match.path) {
      case ROUTES.COMPLETED:
        return 'COMPLETED';
      case ROUTES.REMAINING:
        return 'REMAINING';
      default:
        return 'ALL';
    }
  })();

  return <Component {...props} filter={filter} />
}

export default withCompletedFilter(Home);
