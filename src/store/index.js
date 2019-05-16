import React from "react";
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  user: {},
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "AUTH_CHECK":
      return {...state, isAuthenticated: action.payload};
    case "AUTH_LOGIN":
      return {...state, isAuthenticated: true};
    case "AUTH_LOGOUT":
      return {...state, isAuthenticated: false};
    case "USER_UPDATE":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export {
  Store,
  StoreProvider,
}
