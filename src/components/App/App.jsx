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
import {cards, savedCards } from '../../utils/utils';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
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
              <Footer />
            </Route>
            <Route path="/movies">
              <Movies cards={cards}/>
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies cards={savedCards}/>
              <Footer />
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
    </div>
  );
}

export default App;
