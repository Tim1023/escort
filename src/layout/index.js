import React from 'react'
import PropTypes from 'prop-types'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

const Layout = ({ children, ...props }) => {

  if (props.isAuthenticated) {
    return <PrivateLayout {...props}>{children}</PrivateLayout>
  }
  return <PublicLayout {...props}>{children}</PublicLayout>
}
Layout.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}
export default Layout
