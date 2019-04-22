// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/list'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/escorts/:slug',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/details'),
      loading: LoadingComponent,
    }),
  },
]

export default routes
