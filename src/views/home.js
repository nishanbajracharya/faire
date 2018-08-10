import React from 'react';

import ROUTES from '../constants/routes';

const Home = ({ ...props }) => <div className="container">
  {
    props.filter
  }
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
