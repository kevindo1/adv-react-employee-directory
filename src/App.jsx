import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Create from './views/Profile/Create/Create';
import Edit from './views/Profile/Edit/Edit';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';

export default function App() {
  return (
    <>
      {/* <h1
        className={`
      bg-purple-400
        text-3xl
        text-center
      text-white
        font-bold
        p-10
        w-1/2
        mx-auto
        mt-10
        myCustomCssClass
      `}
      >
        Hello, World!
      </h1> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
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
    </>
  );
}
