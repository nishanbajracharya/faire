import React from 'react';

import ROUTES from '../constants/routes';
import Search from '../components/search';
import { AddTodo } from './todoList';

const Home = ({ filter = '' }) => <div className="container full-width main-content">
  <Search />
  <AddTodo />
</div>;

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
