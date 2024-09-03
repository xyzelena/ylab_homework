import { useState } from 'react';
import AuthContext from '../../contexts/AuthContext.js';

import {
  getItemStorage,
  clearStorage,
} from '../../utils/authLocalStorage.js';

const AuthProvider = ({ children }) => {
  const isLoggedIn = !!getItemStorage();

  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const logIn = (data) => {
      setItemStorage(data);
      setLoggedIn(true);
    };

  const logOut = () => {
      clearStorage();
      setLoggedIn(false);
    };

  const contextValue = { loggedIn, logIn, logOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
