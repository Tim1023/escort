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
import {Store} from "../store";

const history = createBrowserHistory()

const Routes = () => {
  const { state:{user} } = React.useContext(Store);

  return (<Router hisotry={history}>
    <Layout isAuthenticated={!!user}>
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

export default Routes
