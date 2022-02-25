import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import CreateEdit from './views/Profile/CreateEdit';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Header from './components/Header/Header';
import { ProfileProvider } from './context/ProfileContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <>
      <UserProvider>
        <ProfileProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Auth />
              </Route>
              <Route exact path="/register">
                <Auth isSigningUp />
              </Route>
              <Route path="/confirm-email">
                <ConfirmEmail />
              </Route>
              <PrivateRoute exact path="/profile">
                <Profile />
              </PrivateRoute>
              <PrivateRoute exact path="/profile/edit">
                <CreateEdit />
              </PrivateRoute>
              <PrivateRoute exact path="/profile/create">
                <CreateEdit isCreatingProfile />
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </ProfileProvider>
      </UserProvider>
    </>
  );
}
