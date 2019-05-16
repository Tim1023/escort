//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation'
import Footer from '../common/footer'
import {Store} from "../store";
import {getUser} from "../modules/auth/services";

const displayName = 'Private Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PrivateLayout({ children }) {
  const { state,dispatch } = React.useContext(Store);

  React.useEffect(()=>{
    async function runGetUser() {
      if(state.isAuthenticated && !state.user.id){
        await getUser(dispatch);
      }
    }
    runGetUser();

  },[])
  return <div>
    <Navigation isAuthenticated={true} />
    <main style={{ minHeight: '100vh'}}>
      { children }
    </main>
    <Footer/>
  </div>
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout
