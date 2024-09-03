import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './AuthProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import Header from '../Header/Header.jsx';

import Main from '../../pages/Main/Main.jsx';
import Login from '../../pages/Login/Login.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';

import ROUTES from '../../utils/routes.js';

import './App.css';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home()} element={<Header />}>
          <Route
            index
            element={(
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            )}
          />
          <Route path={ROUTES.login()} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;

