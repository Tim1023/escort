//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation'
// import ScrollTop from '../common/scroll-top'
// import Footer from '../common/footer'

const displayName = 'Private Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PrivateLayout({ children }) {
  return <div>
    <Navigation isAuthenticated={true} />
    <main style={{ minHeight: '100vh'}}>
      { children }
      {/*<ScrollTop />*/}
    </main>
    {/*<Footer/>*/}
  </div>
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout