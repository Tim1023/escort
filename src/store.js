import React from "react";
import PropTypes from 'prop-types';

export const Store = React.createContext();

const initialState = {
  user: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_USER":
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
  StoreProvider,
}
