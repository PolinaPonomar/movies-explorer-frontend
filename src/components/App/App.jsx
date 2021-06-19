import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isNavMenuOpen,setIsNavMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavMenuOpen(true);
  };
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

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
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
