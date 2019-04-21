// import libs
import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { Switch } from 'react-router'
import {createBrowserHistory} from 'history'

// import components
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import Layout from '../layout'

const history = createBrowserHistory()

const Routes = () => (
  <Router hisotry={history}>
    <Layout isAuthenticated={false} >
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />
          }
          return <PublicRoute key={i} {...route} />
        })}
      </Switch>
    </Layout>
  </Router>
)

export default Routes
