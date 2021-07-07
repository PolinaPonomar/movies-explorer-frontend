import { useContext } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Movies(props) {
  // подписка на контекст информации о юзере
  const currentUser = useContext(CurrentUserContext);
  const cardsSavedCurrentUser = props.savedCards.filter(item => item.owner._id === currentUser._id);
  
  return (
    <main className="content">
        <SearchForm 
          onShowMovies={props.onShowMovies}
          onFilterCheckboxClick={props.onFilterCheckboxClick}
        />
        <Preloader isOpen={props.isPreloaderOpen}/>
        <MoviesCardList 
          isServerError={props.isServerError}
          onCardSave={props.onCardSave}
          searchedCards={props.searchedCards}
          isOpen={props.isMoviesCardListOpen}
          shownCards={props.shownCards}
          onMoreClick={props.onMoreClick}
          savedCards={cardsSavedCurrentUser}
        />
    </main>
  );
}

export default Movies;
