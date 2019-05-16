// import libs
import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { Switch } from 'react-router'
import {createBrowserHistory} from 'history'
import PropTypes from 'prop-types';

// import components
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import Layout from '../layout'

const history = createBrowserHistory()

const Routes = ({isAuthenticated}) => {
  return (<Router hisotry={history}>
    <Layout isAuthenticated={isAuthenticated}>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />
          }
          return <PublicRoute key={i} {...route} />
        })}
      </Switch>
    </Layout>
  </Router>)
}
const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}
Routes.propTypes = propTypes;

export default Routes
