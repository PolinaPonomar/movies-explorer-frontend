import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [tokenCheckHappend, setTokenCheckHappend] = useState(false);
  const [isNavMenuOpen,setIsNavMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMenuClick = () => {
    setIsNavMenuOpen(true);
  };
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegister = (inputs) => {
    MainApi.register(inputs)
      .then((data) => {
        setErrorMessage('');
        //автоматическая авторизация
        const {email, password} = inputs;
        handleLogin({email, password})
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      });
  }

  const handleLogin = (inputs) => {
    MainApi.authorize(inputs)
        .then((data) => { 
          if (data.token) {
            setErrorMessage('');
            localStorage.setItem('jwt', data.token);
            tokenCheck();
            history.push('/movies');
          }
        })
        .catch((err) => {
          setErrorMessage(err);
          console.log(err);
        });
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) { 
      MainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }

  return (
    < CurrentUserContext.Provider value={currentUser}>
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
                onSignOut={handleSignOut}
              />
              <Route path="/signin">
                <Login onLogin={handleLogin} errorMessage={errorMessage}/>
              </Route>
              <Route path="/signup">
                <Register onRegister={handleRegister} errorMessage={errorMessage}/>
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
          </Switch>
          <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
