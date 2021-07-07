import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import * as MainApi from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
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
import { filterCards, filterCardsByText, filterCardsByCheckbox, defineShownCardsParameters } from '../../utils/utils';

function App() {
  const history = useHistory();
  const location = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState({});

  // стейты, касающиеся авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNavMenuOpen,setIsNavMenuOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  // стейты для работы с карточками фильмов
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isMoviesCardListOpen, setIsMoviesCardListOpen] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  // на странице movies
  const [allCards, setAllCards] = useState([]);
  const [searchedCards, setSearchedCards] = useState([]);
  // на странице saved-movies
  const [savedCards, setSavedCards] = useState([]);
  const [searchedSavedCards, setSearchedSavedCards] = useState(savedCards);
  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  // для короткометражек
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [oldSearchedCards, setOldSearchedCards] = useState(searchedCards);
  const [oldSearchedSavedCards, setOldSearchedSavedCards] = useState(searchedSavedCards);
  // вывод карточек по нескольку вряд
  const [numberOfInitialCards, setNumberOfInitialCards] = useState(0);
  const [maxNumberOfAddedCards, setMaxNumberOfAddedCards] = useState(0);
  const [shownCards, setShownCards] = useState([]);

  const handleMenuClick = () => {
    setIsNavMenuOpen(true);
  };
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  const setShownCardsParameters = () => {
    const pageWidth = window.innerWidth;
    const shownCardsParameters = defineShownCardsParameters(pageWidth);
    setNumberOfInitialCards(shownCardsParameters.numOfInitialCards);
    setMaxNumberOfAddedCards(shownCardsParameters.maxNumOfAddedCards);
  }

  // при монтировании компонента определить характеристики того, как карточки будут отображаться на странице
  useEffect( () => {
    setShownCardsParameters();
  }, []);

  // учесть изменение ширины экрана (переворот телефона)
  window.addEventListener('resize', () => {
    setTimeout(setShownCardsParameters, 1000);
  });

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect( () => {
    if (localStorage.getItem('movies')) {
      setAllCards(JSON.parse(localStorage.getItem('movies')));
    }
  }, []);

  useEffect( () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getSavedMovies()
        .then((movies) => {
            setSavedCards(movies);
        })
        .catch((err) => {
            console.log(err);
        });
    }
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
    localStorage.removeItem('movies');
    setShownCards([]);
    setIsMoviesCardListOpen(false);
    setLoggedIn(false);
    history.push('/');
  }

  const handleEditUserInfo = (inputs) => {
    MainApi.setUserInfo(inputs)
      .then((data) => {
        setCurrentUser(data);
        setResultMessage('Ура! Данные обновлены :)');
      })
      .catch((err) => {
        setResultMessage(err);
        console.log(err);
      })
  }

  const handleCardSave = (movie) => {
    const isCardSaved = savedCards.map(item => item.movieId).includes(movie.id);
    if (!isCardSaved) {
      MainApi.saveMovie(movie)
        .then((movieCard) => {
          setSavedCards([...savedCards, movieCard]);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      const thisMovieInSavedCards = savedCards.find(item => item.movieId === movie.id);
      handleCardUnsave(thisMovieInSavedCards);
    }
  }

  const handleCardUnsave = (movie) => {
    MainApi.deleteSavedMovie(movie._id)
      .then(() => {
        const updateSavedCards = savedCards.filter(item => item !== movie );
        setSavedCards(updateSavedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleShowMovies = (searchText) => {
    if (location === '/movies') {
      setIsMoviesCardListOpen(false);
      setIsServerError(false);
      if (allCards.length === 0) {
        setIsPreloaderOpen(true);
        MoviesApi.getMovies()
          .then((movies) => {
            setIsPreloaderOpen(false);
            localStorage.setItem('movies', JSON.stringify(movies));
            const allMovies = JSON.parse(localStorage.getItem('movies'));
            setAllCards(allMovies);

            // подготовить то, что будем показывать при отмене фильтра по короткометражкам
            setOldSearchedCards(filterCardsByText(allMovies, searchText));
            // отфильтровать запрос и отдать в MoviesCardList
            const filteredCards = filterCards(allMovies, searchText, isCheckboxActive);
            setSearchedCards(filteredCards);
            setShownCards(filteredCards.slice(0, numberOfInitialCards));
            setIsMoviesCardListOpen(true);

          })
          .catch((err) => {
            setIsPreloaderOpen(false);
            setIsServerError(true);
            setIsMoviesCardListOpen(true);
            console.log(err);
          });
      } else {
          // подготовить то, что будем показывать при отмене фильтра по короткометражкам
          setOldSearchedCards(filterCardsByText(allCards, searchText));
          // отфильтровать запрос и отдать в MoviesCardList
          const filteredCards = filterCards(allCards, searchText, isCheckboxActive);
          setSearchedCards(filteredCards);
          setShownCards(filteredCards.slice(0, numberOfInitialCards));
          setIsMoviesCardListOpen(true);

      }
    } else if (location === '/saved-movies') {
        // подготовить то, что будем показывать при отмене фильтра по короткометражкам
        setOldSearchedSavedCards(filterCardsByText(savedCards, searchText));
        // отфильтровать запрос и отдать в MoviesCardList
        const filteredCards = filterCards(savedCards, searchText, isCheckboxActive);
        setSearchedSavedCards(filteredCards);
        setIsSearchButtonPressed(true);
    }
  };

  const handleMoreClick = () => {
    setShownCards(searchedCards.slice(0, shownCards.length + maxNumberOfAddedCards));
  };

  const handleFilterCheckboxClick = () => {
    setIsCheckboxActive(!isCheckboxActive);
    if (!isCheckboxActive) {
      if (location === '/movies') {
        // подготовить то, что будем показывать при отмене фильтра по короткометражкам
        setOldSearchedCards(searchedCards);
        // отфильтровать запрос и отдать в MoviesCardList
        const shortFilms= filterCardsByCheckbox(searchedCards);
        setSearchedCards(shortFilms);
        setShownCards(shortFilms.slice(0, numberOfInitialCards));
      } else if (location === '/saved-movies') {
        // подготовить то, что будем показывать при отмене фильтра по короткометражкам
          setOldSearchedSavedCards(searchedSavedCards);
          // отфильтровать запрос и отдать в MoviesCardList
          const shortFilms= filterCardsByCheckbox(searchedSavedCards);
          setSearchedSavedCards(shortFilms);
      }
    } else {
      if (location === '/movies') {
        setSearchedCards(oldSearchedCards);
        setShownCards(oldSearchedCards.slice(0, numberOfInitialCards));
      } else if (location === '/saved-movies') {
          setSearchedSavedCards(oldSearchedSavedCards);
      }
    } 
  };

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
                onShowMovies={handleShowMovies}
                isPreloaderOpen={isPreloaderOpen}
                isMoviesCardListOpen={isMoviesCardListOpen}
                isServerError={isServerError}
                searchedCards={searchedCards}
                shownCards={shownCards}
                onMoreClick={handleMoreClick}
                savedCards={savedCards}
                onCardSave={handleCardSave}
                onFilterCheckboxClick={handleFilterCheckboxClick}
              />
              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                onShowMovies={handleShowMovies}
                savedCards={savedCards}
                onCardUnsave={handleCardUnsave}
                searchedSavedCards={searchedSavedCards}
                isSearchButtonPressed={isSearchButtonPressed}
                onFilterCheckboxClick={handleFilterCheckboxClick}
              />
              <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={handleSignOut}
                onEditUserInfo={handleEditUserInfo}
                resultMessage={resultMessage}
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
