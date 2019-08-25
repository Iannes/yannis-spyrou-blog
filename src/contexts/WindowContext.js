import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const WindowContext = createContext({});

const INITIAL_STATE = {
  width: 0, // Int
  height: 0, // Int
};

const WindowProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({ ...INITIAL_STATE });

  return (
    <WindowContext.Provider value={[dimensions, setDimensions]}>{children}</WindowContext.Provider>
  );
};

WindowProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WindowProvider;
