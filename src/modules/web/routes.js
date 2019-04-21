// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home'),
      loading: LoadingComponent,
    }),
  },

  {
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/about'),
      loading: LoadingComponent,
    }),
  },
]

export default routes
