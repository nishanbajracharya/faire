import React from 'react';
import { connect } from 'react-redux';

import { getList } from './showcase';
import Modal from '@/components/modal';
import ROUTES from '@/constants/routes';
import Search from '@/components/search';
import * as modalActions from '@/actions/modal';
import * as todoActions from '@/actions/todolist';
import TodoList, { AddTodo, AddTodoExpanded } from './todoList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
      sticky: false,
      todoName: '',
      list: getList(),
    };
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
  };

  addTodo = () => {
    this.setState({
      todoName: '',
    });

    this.state.todoName &&
      this.props.addTodo({
        desc: '',
        isCompleted: false,
        name: this.state.todoName,
      });
  };

  settodoName = todoName => this.setState({ todoName });

  toggleTodo = item => {
    const index = this.state.list.findIndex(listItem => listItem === item);

    this.setState({
      list: this.state.list.map((item, id) =>
        id === index ? { ...item, isCompleted: !item.isCompleted } : item
      ),
    });
  };

  searchTodo = (list, query) =>
    list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  filterTodo = (list, filter) => {
    switch (filter) {
      case 'COMPLETED':
        return list.filter(item => item.isCompleted);
      case 'REMAINING':
        return list.filter(item => !item.isCompleted);
      default:
        return list;
    }
  };

  setSearchQuery = query => this.setState({ query });

  render() {
    return (
      <div className="container full-width main-content">
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={() => this.props.openModal(false)}
        >
          <AddTodoExpanded
            onClose={() => this.props.openModal(false)}
            defaultTodo={this.state.todoName}
          />
        </Modal>
        <Search placeholder="Search for a task" onInput={this.setSearchQuery} />
        <div className="todo-container">
          <AddTodo
            onInput={this.settodoName}
            add={this.addTodo}
            openDialog={() => this.props.openModal(true)}
            sticky={this.state.sticky}
          />
          <TodoList
            list={this.filterTodo(
              this.searchTodo(this.props.list, this.state.query),
              this.props.filter
            )}
            onClick={this.props.toggleTodo}
            sticky={this.state.sticky}
          />
        </div>
      </div>
    );
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

  return <Component {...props} filter={filter} />;
};

export default connect(
  state => ({
    list: state.todo.list,
    isOpen: state.modal.open,
  }),
  dispatch => ({
    addTodo: todo => dispatch(todoActions.addTodo(todo)),
    toggleTodo: id => dispatch(todoActions.toggleTodo(id)),
    openModal: open => dispatch(modalActions.openModal(open)),
  })
)(withCompletedFilter(Home));
