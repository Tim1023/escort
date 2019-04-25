import React, { useReducer } from "react";
import PropTypes from 'prop-types'

const initialState = {
  published: false,
};
const FormContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_PACKAGE":
      return {
        ...state,
        package: action.payload,
      };
    case "UPDATE_CATEGORY":
      return{
        ...state,
        category: action.payload,
      };
    case "UPDATE_CONTENT":
      return state;
    default:
      return state;
  }
}

const FormContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

FormContextProvider.propTypes = propTypes;

export { reducer, FormContext, FormContextProvider };
