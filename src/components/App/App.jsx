import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import * as MainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import Footer from '../Footer/Footer.jsx';

import { savedCards } from '../../utils/utils';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavMenuOpen,setIsNavMenuOpen] = useState(false);
  const [errorRegistrationMessage, setErrorRegistrationMessage] = useState('');

  const handleMenuClick = () => {
    setIsNavMenuOpen(true);
  };
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  const handleRegister = (inputs) => {
    console.log(inputs)
    MainApi.register(inputs)
      .then((data) => {
        //автоматически авторизировать
        history.push('/');
      })
      .catch((err) => {
        setErrorRegistrationMessage(err);
        console.log(err);
      })
  }

  return (
    <div className="page"> 
        <Header
          loggedIn={loggedIn}
          onMenuClick={handleMenuClick}
          isNavMenuOpen={isNavMenuOpen}
          onCloseNavMenu={closeNavMenu}
        />
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies} 
            />
            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              cards={savedCards}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
            />
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register onRegister={handleRegister} errorRegistrationMessage={errorRegistrationMessage}/>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
