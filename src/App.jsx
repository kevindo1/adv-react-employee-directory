import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Create from './views/Profile/Create/Create';
import Edit from './views/Profile/Edit/Edit';
import Profile from './views/Profile/Profile';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <UserProvider>
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
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profile/edit">
              <Edit />
            </Route>
            <Route exact path="/profile/create">
              <Create />
            </Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
