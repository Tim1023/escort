// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/profile',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/profile'),
      loading: LoadingComponent,
    }),
  },

]

export default routes
