import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import useGetUser from './hooks/useGetUser';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { UserContext } from './contexts/UserContext';

export default function App(): JSX.Element {
  const { user, isLoggedin } = useGetUser();

  return (
    <div className="appContainer">
      <UserContext.Provider value={{ user, isLoggedin }}>
        <Router>
          <Switch>
            <Route exact path="/">
              {isLoggedin ? <Redirect to={'/dashboard'} /> : <HomePage />}
            </Route>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/dashboard">
              {isLoggedin ? <DashboardPage /> : <Redirect to={'/login'} />}
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}
