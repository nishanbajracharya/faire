import React from 'react';

import { getList } from './showcase';
import ICONS from '../constants/icons';
import Modal from '../components/modal';
import ROUTES from '../constants/routes';
import Search from '../components/search';
import TodoList, { AddTodo } from './todoList';
import IconButton from '../components/iconButton';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      query: '',
      sticky: false,
      newTodoName: '',
      list: getList(),
      modalOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 124) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
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

  openModal = modalOpen => this.setState({ modalOpen })

  render() {
    return <div className="container full-width main-content">
      <Modal isOpen={this.state.modalOpen} onRequestClose={() => this.openModal(false)}>Create Todo <IconButton name={ICONS.OPEN_IN_NEW} onClick={() => this.openModal(false)}/></Modal>
      <Search placeholder="Search for a task" onInput={this.setSearchQuery} />
      <div className="todo-container">
        <AddTodo onInput={this.setNewTodoName} add={this.addTodo} openDialog={() => this.openModal(true)} sticky={this.state.sticky}/>
        <TodoList list={this.filterTodo(this.searchTodo(this.state.list, this.state.query), this.props.filter)} onClick={this.toggleTodo} sticky={this.state.sticky} />
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
