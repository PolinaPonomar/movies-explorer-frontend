import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

  return (
    <main className="content">
        <SearchForm onShowMovies={props.onShowMovies}/>
        <Preloader isOpen={props.isPreloaderOpen}/>
        <MoviesCardList 
          isServerError={props.isServerError}
          onCardSave={props.onCardSave}
          searchedCards={props.searchedCards}
          isOpen={props.isMoviesCardListOpen}
          shownCards={props.shownCards}
          onMoreClick={props.onMoreClick}
          savedCards={props.savedCards}
        />
    </main>
  );
}

export default Movies;
