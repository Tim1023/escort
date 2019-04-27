// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/signUp',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/signUp'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/login'),
      loading: LoadingComponent,
    }),
  },
]

export default routes
