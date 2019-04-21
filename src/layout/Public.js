//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation'
// import ScrollTop from '../common/scroll-top'
// import Footer from '../common/footer'

const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

const PublicLayout = ({ children })=> {
  return <div>
    <Navigation isAuthenticated={false}/>
    <main style={{ minHeight: '100vh'}}>
      { children }
      {/*<ScrollTop />*/}
    </main>
    {/*<Footer/>*/}
  </div>
}

PublicLayout.displayName = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
